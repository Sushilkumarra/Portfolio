import {} from "react-router-dom"
import About from './About.jsx'
import Skills from './Skills.jsx'
import Education from './Education.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Resume from './Resume.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
// import {TypeAnimation} from 'react-type-animation'

const Home = () => {


    useEffect(() => {
      AOS.init();
    }, []);
     
      let handleFacebook = () => {
      let link = document.createElement("a");
      link.href="https://www.facebook.com/profile.php?id=100038828467837";
      link.click();
      
      
     }
    
     let handleLinkedin = () => {

      let link = document.createElement("a");
      link.href="https://www.linkedin.com/in/sushil-kumar-rajpoot-3967101b4/";
      link.click();
     }

     let handleInstagram = () => {

      let link = document.createElement("a");
      link.href="https://www.instagram.com/suskumar646/";
      link.click();
     }
    
    


    return(
        <>
        <div className=' flex bg-gray-200 '>
        <div className='w-1/2 items-center mt-40 px-12 space-y-4' data-aos = "fade-right" data-aos-delay="250">
         <h3>Welcome In My Feed</h3>
         <h1 className='text-xl'>Hello, I am a</h1>
         {/* <TypeAnimation
         sequence={[
            'Developer',
            2000,
         ]}

          speed={50}
          className='text-accent'
          wrapper='span'
          repeat={Infinity}
         /> */}
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Doloremque sed assumenda quis eos, sint exercitationem recusandae sit. 
            Quas eligendi ab autem minus, repudiandae error sapiente iure officia cum veniam cupiditate.</p>
            <button className='bg-blue-500 rounded-md p-2 ml-20 hover:scale-110 duration-500'>SeeMyWork</button>
            <div className='h-8 w-6 flex flex-row space-x-8 ml-16 my-6'>
            
            <img src="facebook.png" alt="Facebook" className="cursor-pointer hover:scale-125 duration-700" onClick={handleFacebook} />
            <img src="instagram.png" alt="Instagram" className="cursor-pointer hover:scale-125 duration-700" onClick={handleInstagram} />
            <img src="link.png" alt="linked" className="cursor-pointer hover:scale-125 duration-700" onClick={handleLinkedin} />
           
            </div>
        </div>
        <div className='w-1/2 mix-blend-color-burn items-center  ' data-aos = "fade-left" data-aos-delay="250" >
         <img src='Book.jpg' className='h-100 w-90 mx-25'  alt='Image'/>
        </div>
        </div>      
        <div >
        <About/>    
        </div>
        <hr>
        </hr>
        <div className='h-auto'>
        <Skills/> 
        </div>
        <hr>
        </hr>
        <div className='h-auto'>
           <Education/>
        </div>
        <hr>
        </hr>
        <div>
           <Projects/>
        </div>
        <hr>
        </hr>
        <div>
           <Contact/>
        </div>
        <hr>
        </hr>
        <div>
           <Resume/>
        </div>
        
        </>
        
    );
};

export default Home;