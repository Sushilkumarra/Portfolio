import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"


function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
     <div className='flex flex-row  bg-orange-100'>
      
      <div className='w-1/2 h-auto ' data-aos = "fade-right" data-aos-delay="250">
        <div className='mt-3 items-center p-14 space-y-5'>
        <h1 className='font-bold text-5xl '>My Skills And </h1>
        <h1 className='font-bold text-5xl '>Experiences</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt enim earum laboriosam sit quas hic,
           inventore odit culpa repellat optio adipisci aliquam rerum,
            molestiae excepturi praesentium quis laborum rem corrupti?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt enim earum laboriosam sit quas hic,
           inventore odit culpa repellat optio adipisci aliquam rerum,
            molestiae excepturi praesentium quis laborum rem corrupti?</p>
           
            <button className='bg-blue-600 h-8 w-24 '>See More</button>
            
        </div>
        
      </div>
      <div >
        <h1 className='text-4xl mt-2 border-b-4 border-blue-600'>MySkills</h1>
      </div>
      <div className='w-1/2 h-auto mt-10 justify-center ' data-aos = "fade-left" data-aos-delay="250">
       <div className='flex flex-row mx-10 space-x-12'>
       <img src="html-5.png" className='h-24 w-24 mt-12' alt="html" />
       <img src="css-3.png" className='h-24 w-24 mt-12' alt="css" />
       <img src="bootstrap.png" className='h-24 w-24 mt-12' alt="bootstrap" />
       </div>
       <div className='flex flex-row mx-12 space-x-12'>
       <img src="js.png" className='h-24 w-24 mt-12' alt="js" />
       <img src="library.png" className='h-24 w-24 mt-12' alt="react" />
       <img src="tailwindcss.png" className='h-24 w-24 mt-12' alt="tailwind" />
       </div>
       
        
      </div>
     </div>
    </>
  )
}

export default Skills;