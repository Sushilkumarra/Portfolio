
import {} from "react-router-dom";
import About from './About.jsx';
import Skills from './Skills.jsx';
import Education from './Education.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
//import Resume from './Resume.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  let handleFacebook = () => {
    window.open("https://www.geeksforgeeks.org/user/invertissushil5171/", "_blank");
  };

  let handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/sushil-kumar-rajpoot-3967101b4/", "_blank");
  };

  let handleInstagram = () => {
    window.open("https://course.acciojob.com/", "_blank");
  };

  return (
    <div className="overflow-x-hidden"> {/* ✅ Prevents horizontal scroll */}
      {/* Hero Section */}
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div
          className="items-center px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48 pt-28 space-y-4 text-white max-w-7xl mx-auto"
          data-aos="fade-right"
          data-aos-delay="250"
        >
          <h3 className="text-base sm:text-lg">Hello, I'm</h3>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Sushil Kumar Rajpoot
          </h1>
          <h2 className="text-md sm:text-lg md:text-xl">Software Developer</h2>

          <button className="bg-white text-black rounded-md px-4 py-2 mt-4 hover:scale-110 duration-500">
            See My Work
          </button>

          {/* Social Icons */}
          <div className="h-11 flex flex-row space-x-6 md:space-x-8 mt-6">
            <img
              src="geeksforgeeks.svg"
              alt="Facebook"
              className="cursor-pointer hover:scale-125 duration-700 w-8 h-8 sm:w-10 sm:h-10"
              onClick={handleFacebook}
            />
            <img
              src="acciojob_logo.svg"
              alt="Instagram"
              className="cursor-pointer hover:scale-125 duration-700 w-8 h-8 sm:w-10 sm:h-10"
              onClick={handleInstagram}
            />
            <img
              src="link.png"
              alt="LinkedIn"
              className="cursor-pointer hover:scale-125 duration-700 w-8 h-8 sm:w-10 sm:h-10"
              onClick={handleLinkedin}
            />
          </div>
        </div>
      </div>

      {/* Sections */}
      <About />
      <hr />
      <Skills />
      <hr />
      <Education />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <hr />
      {/* <Resume /> */}
    </div>
  );
};

export default Home;






// import {} from "react-router-dom"
// import About from './About.jsx'
// import Skills from './Skills.jsx'
// import Education from './Education.jsx'
// import Projects from './Projects.jsx'
// import Contact from './Contact.jsx'
// import Resume from './Resume.jsx'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react"
// // import {TypeAnimation} from 'react-type-animation'

// const Home = () => {


//     useEffect(() => {
//       AOS.init();
//     }, []);
     
//       let handleFacebook = () => {
//       let link = document.createElement("a");
//       link.href="https://www.facebook.com/profile.php?id=100038828467837";
//       link.click();
      
      
//      }
    
//      let handleLinkedin = () => {

//       let link = document.createElement("a");
//       link.href="https://www.linkedin.com/in/sushil-kumar-rajpoot-3967101b4/";
//       link.click();
//      }

//      let handleInstagram = () => {

//       let link = document.createElement("a");
//       link.href="https://www.instagram.com/suskumar646/";
//       link.click();
//      }
    
    


//     return(
//         <>
//         <div
//   className=" w-full h-screen  bg-cover bg-center"
//   style={{ backgroundImage: "url('/background.jpg')" }}
// >


// <div className='items-center px-48 pt-28 space-y-4 text-white' data-aos = "fade-right" data-aos-delay="250">
//       <h3>Hello, I'm</h3>
//          <h1 className="text-6xl">Sushil Kumar Rajpoot</h1>
//          <h2 className=" text-xl">Software Developer</h2>
        
         
//             <button className='bg-white text-black rounded-md p-2 ml-20 hover:scale-110 duration-500'>SeeMyWork</button>
//             <div className='h-11 w-10 flex flex-row space-x-8 ml-16 my-6'>
            
//             <img src="facebook.png" alt="Facebook" className="cursor-pointer hover:scale-125 duration-700" onClick={handleFacebook} />
//             <img src="instagram.png" alt="Instagram" className="cursor-pointer hover:scale-125 duration-700" onClick={handleInstagram} />
//             <img src="link.png" alt="linked" className="cursor-pointer hover:scale-125 duration-700" onClick={handleLinkedin} />
           
//             </div>
//         </div> 





//   {/* <h1 className="text-white text-4xl font-bold text-center pt-40">
//     Welcome to My Portfolio
//   </h1> */}



// </div>
    
//         <div >
//         <About/>    
//         </div>
//         <hr>
//         </hr>
//         <div className='h-auto'>
//         <Skills/> 
//         </div>
//         <hr>
//         </hr>
//         <div className='h-auto'>
//            <Education/>
//         </div>
//         <hr>
//         </hr>
//         <div>
//            <Projects/>
//         </div>
//         <hr>
//         </hr>
//         <div>
//            <Contact/>
//         </div>
//         <hr>
//         </hr>
//         <div>
//            <Resume/>
//         </div>
        
//         </>
        
//     );
// };

// export default Home;







{/* <div className='w-full h-96 items-center mt-40 px-12 space-y-4' data-aos = "fade-right" data-aos-delay="250">
      <h3>Hello, I'm</h3>
         <h1 className="text-5xl">Sushil Kumar Rajpoot</h1>
         <h2 className="text-sky-900 text-xl">Software Developer</h2>
        
         
            <button className='bg-blue-500 rounded-md p-2 ml-20 hover:scale-110 duration-500'>SeeMyWork</button>
            <div className='h-8 w-6 flex flex-row space-x-8 ml-16 my-6'>
            
            <img src="facebook.png" alt="Facebook" className="cursor-pointer hover:scale-125 duration-700" onClick={handleFacebook} />
            <img src="instagram.png" alt="Instagram" className="cursor-pointer hover:scale-125 duration-700" onClick={handleInstagram} />
            <img src="link.png" alt="linked" className="cursor-pointer hover:scale-125 duration-700" onClick={handleLinkedin} />
           
            </div>
        </div>  */}