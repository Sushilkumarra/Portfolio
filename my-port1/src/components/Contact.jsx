import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

function Contact() {

  useEffect(() => {
    AOS.init();
  }, []);



  let handleLinkedin = () => {

    let link = document.createElement("a");
    link.href="https://www.linkedin.com/in/sushil-kumar-rajpoot-3967101b4/";
    link.click();
   }

   let handleGmail = () => {

    let link = document.createElement("a");
    link.href="https://invertissushil5171@gmail.com";
    link.click();
   }

   let handleGithub = () => {

    let link = document.createElement("a");
    link.href="https://github.com/Sushilkumarra/Review";
    link.click();
   }

  return (
    <>
    <div className='bg-cyan-200 h-auto p-4 space-y-20'>
        <div >
          <h1 className='text-4xl text-center underline decoration-solid decoration-sky-600 '>Contact Me</h1>
        </div>
        <div className='flex flex-row h-32 w-32 ml-72 space-x-36'>
          
          <img src="linkedin.png"  alt="Linkedin" className="cursor-pointer hover:scale-150 duration-700" data-aos = "fade-left" data-aos-delay="250" onClick={handleLinkedin} />
       
         
          <img src="logo.png" alt="Email" className="cursor-pointer hover:scale-150 duration-700" data-aos = "fade-down" data-aos-delay="250" onClick={handleGmail} />
         
          
          <img src="github.png" alt="Github" className="cursor-pointer hover:scale-150 duration-700" data-aos = "fade-right" data-aos-delay="250" onClick={handleGithub} />
          
          
        </div>
        <form>
          <div className=" container p-10 h-80 w-72 mb-12 space-y-3 bg-zinc-100  flex flex-col " data-aos = "fade-up" data-aos-delay="250">
            <div>
              <label>Enter Your Name</label>
              <input
                type="text"
                id="name"
                className="border-2  rounded-sm bg-gray-100 hover:border-none"
                placeholder="Enter your name"
              ></input>
            </div>
            <div>
              <label>Enter Your Email</label>
              <input
                type="email"
                id="email"
                className="border-2  rounded-sm bg-gray-100 hover:border-none"
                placeholder="Enter your password"
              ></input>
            </div>
            <div>
              <label>Enter Your password</label>
              <input
                type="password"
                id="password"
                className="border-2  rounded-sm bg-gray-100 hover:border-none"
                placeholder="Enter your password"
              ></input>
            </div>
            <button
              type="submit"
              className="bg-lime-400 h-6 w-36 rounded-full hover:bg-pink-800"
            >
              login
            </button>
          </div>
        </form>
      </div>
    </>

  )
}

export default Contact;