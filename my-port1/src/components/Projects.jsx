import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

   


function Projects() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
     <div className='flex flex-row h-screen bg-black text-white'> 
     
     <div className='w-1/2 p-8' data-aos = "fade-right" data-aos-delay="250">
     <img src="Movieapp.png" className='mt-20' alt="Movieapp" />
     </div> 
     <h1 className='text-4xl w-0 h-0 underline decoration-solid decoration-sky-600 '>MyProject</h1>
     <div className='w-1/2 h-40 pt-24 ml-14 space-y-4' data-aos = "fade-left" data-aos-delay="250">
     <h1>REVV.COM</h1>
     <p>A rental car web application provides varities of car on rent</p>
     <h1>Features:</h1>
     <h>1. Wishlist Features</h>
     <h3>2. Provided filters for user convenience</h3>
     <h3>3. User intractive interface</h3>
     <h1>Tech Stack:</h1>
     <p>Html, Css, Javascript, Rectjs</p>
     <div className='flex flex-row space-x-4'>
      <button className='bg-red-600 p-4 text-center rounded-lg' >Deploy</button>
      <button className='bg-red-300  p-4 text-center rounded-lg'>Code</button>
     </div>
     </div> 
     </div> 

     <div className='flex flex-row h-screen bg-black text-white'> 
     
     <div className='w-1/2 p-8' data-aos = "fade-right" data-aos-delay="250">
     <img src="Movieapp.png" className='mt-20' alt="Movieapp" />
     </div> 
     
     <div className='w-1/2 h-40 pt-24 ml-14 space-y-4' data-aos = "fade-left" data-aos-delay="250">
     <h1>REVV.COM</h1>
     <p>A rental car web application provides varities of car on rent</p>
     <h1>Features:</h1>
     <h>1. Wishlist Features</h>
     <h3>2. Provided filters for user convenience</h3>
     <h3>3. User intractive interface</h3>
     <h1>Tech Stack:</h1>
     <p>Html, Css, Javascript, Rectjs</p>
     <div className='flex flex-row space-x-4 '>
      <button className='bg-red-600  p-4 text-center  rounded-lg' >Deploy</button>
      <button className='bg-red-300  p-4 text-center rounded-lg'>Code</button>
     </div>
     </div> 
     </div> 

     <div className='flex flex-row h-screen bg-black text-white'> 
     
     <div className='w-1/2 p-8' data-aos = "fade-right" data-aos-delay="250">
     <img src="Movieapp.png" className='mt-20' alt="Movieapp" />
     </div> 
     
     <div className='w-1/2 h-40 pt-24 ml-14 space-y-4' data-aos = "fade-left" data-aos-delay="250">
     <h1>REVV.COM</h1>
     <p>A rental car web application provides varities of car on rent</p>
     <h1>Features:</h1>
     <h>1. Wishlist Features</h>
     <h3>2. Provided filters for user convenience</h3>
     <h3>3. User intractive interface</h3>
     <h1>Tech Stack:</h1>
     <p>Html, Css, Javascript, Rectjs</p>
     <div className='flex flex-row space-x-4 '>
      <button className='bg-red-600   p-4 text-center rounded-lg' >Deploy</button>
      <button className='bg-red-300  p-4 text-center rounded-lg'>Code</button>
     </div>
     </div> 
     </div> 
    </>
  )
}

export default Projects;