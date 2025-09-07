import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
 
function About() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className=" flex flex-row bg-#E4C8BA  h-screen">
        <div className="w-1/2 p-9" data-aos = "fade-right" data-aos-delay="250">
        <img src="Hero.jpg" className=" rounded-2xl" alt=" Selphy" />
        </div>
        <div >
        <h1 className='text-4xl mt-2 border-b-4 border-blue-600'>AboutMe</h1>
      </div>
        <div className="w-1/2 font-bold text-xl mt-48 space-y-4" data-aos = "fade-left" data-aos-delay="250">
             <h1 className="text-3xl">Hey There! I am Sushil Kumar</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Expedita officiis id corporis reiciendis doloremque non,
                ipsa molestiae. Temporibus, nemo illo omnis nam porro odio 
                praesentium consequatur aperiam cupiditate consequuntur possimus!</p>
        </div>
      </div>
            
    </>
  );
}

export default About;
