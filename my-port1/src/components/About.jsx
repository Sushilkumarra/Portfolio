import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-cyan-900 text-white min-h-screen w-full overflow-x-hidden">
        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 p-6 flex justify-center"
          data-aos="fade-right"
          data-aos-delay="250"
        >
          <img
            src="Hero.jpg"
            className="rounded-2xl max-w-full h-auto object-cover"
            alt="Selphy"
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full lg:w-1/2 flex flex-col justify-center p-6 space-y-6"
          data-aos="fade-left"
          data-aos-delay="250"
        >
          <h1 className="text-4xl border-b-4 border-blue-600 inline-block">
            About Me
          </h1>
          <h2 className="text-2xl font-semibold">Hey There! I am Sushil Kumar</h2>
          <p className="text-lg leading-relaxed">
            I am a MERN Full Stack Developer with 6 months of experience building
            dynamic web applications.
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              Continuously learning and applying best practices in web development
            </li>
            <li>Eager to learn new technologies and frameworks</li>
            <li>Able to adapt and work with any technology as needed</li>
            <li>
              Committed to adding value to your company through my skills and
              dedication
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;







// import React from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react"
 
// function About() {

//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <>
//       <div className=" flex flex-row bg-cyan-900 text-white h-screen">

//        {/* bg-#E4C8BA */}

//         <div className="w-1/2 p-9" data-aos = "fade-right" data-aos-delay="250">
//         <img src="Hero.jpg" className=" rounded-2xl" alt=" Selphy" />
//         </div>
//         <div >
//         <h1 className='text-4xl mt-2 border-b-4 border-blue-600'>AboutMe</h1>
//       </div>
//         <div className="w-1/2 font-bold text-xl mt-48 space-y-4" data-aos = "fade-left" data-aos-delay="250">
//              <h1 className="text-3xl">Hey There! I am Sushil Kumar</h1>
//              <p>
//               I am a MERN Full Stack Developer with 6 months of experience building dynamic web applications.



// Continuously learning and applying best practices in web development

// Eager to learn new technologies and frameworks

// Able to adapt and work with any technology as needed

// Committed to adding value to your company through my skills and dedication
//              </p>
//         </div>
//       </div>
            
//     </>
//   );
// }

// export default About;
