import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-cyan-900 text-white px-6 py-12">
      <div className="flex flex-col md:flex-row items-center mt-6 md:items-start gap-10">
        {/* Left Section */}
        <div
          className="w-full md:w-1/2"
          data-aos="fade-right"
          data-aos-delay="250"
        >
          <div className="space-y-5">
            <h1 className="font-bold text-4xl md:text-5xl">My Skills And</h1>
            <h1 className="font-bold text-4xl md:text-5xl">Experiences</h1>

            <p className="leading-relaxed">
              React.js, HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap
              <br />
              Node.js, Express.js
              <br />
              MongoDB, Mongoose
              <br />
              Git/GitHub, VS Code, Postman, Netlify, Vercel
              <br />
              RESTful APIs, Responsive Web Design, Deployment
            </p>

            <h2 className="text-xl font-semibold">
              Professional Experience / Strengths:
            </h2>
            <p className="leading-relaxed">
              Developed dynamic, responsive web applications using MERN stack
              <br />
              Created RESTful APIs and integrated them with frontend
              applications
              <br />
              Experienced in database management and CRUD operations
              <br />
              Eager to learn new technologies and frameworks
              <br />
              Adaptable to work with any technology stack
              <br />
              Committed to delivering value and writing clean, maintainable code.
            </p>

            <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition">
              See More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="w-full md:w-1/2 mt-6"
          data-aos="fade-left"
          data-aos-delay="250"
        >
          <h1 className="text-4xl md:text-4xl mb-6 border-b-4 border-blue-600 inline-block">
            My Skills
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center">
            <img src="html-5.png" className="h-20 w-20" alt="html" />
            <img src="css-3.png" className="h-20 w-20" alt="css" />
            <img src="bootstrap.png" className="h-20 w-20" alt="bootstrap" />
            <img src="js.png" className="h-20 w-20" alt="js" />
            <img src="library.png" className="h-20 w-20" alt="react" />
            <img src="tailwindcss.png" className="h-20 w-20" alt="tailwind" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;




// import React from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react"


// function Skills() {
//   useEffect(() => {
//     AOS.init();
//   }, []);


//   return (
//     <>
//      <div className='flex flex-row bg-cyan-900 text-white'>
      
//       <div className='w-1/2 h-auto ' data-aos = "fade-right" data-aos-delay="250">
//         <div className='mt-3 items-center p-14 space-y-5'>
//         <h1 className='font-bold text-5xl '>My Skills And </h1>
//         <h1 className='font-bold text-5xl '>Experiences</h1>
//         <p>React.js, HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap

// Node.js, Express.js

// MongoDB, Mongoose

// Git/GitHub, VS Code, Postman, Netlify, Vercel

// RESTful APIs, Responsive Web Design, Deployment



// </p>

//   <h1>Professional Experience / Strengths:</h1>
//             <p>

              
              
//               Developed dynamic, responsive web applications using MERN stack

// Created RESTful APIs and integrated them with frontend applications

// Experienced in database management and CRUD operations

// Eager to learn new technologies and frameworks

// Adaptable to work with any technology stack

// Committed to delivering value and writing clean, maintainable code.</p>
           
//             <button className='bg-blue-600 h-8 w-24 '>See More</button>
            
//         </div>
        
//       </div>
//       <div >
//         <h1 className='text-4xl mt-2 border-b-4 border-blue-600'>MySkills</h1>
//       </div>
//       <div className='w-1/2 h-auto mt-10 justify-center ' data-aos = "fade-left" data-aos-delay="250">
//        <div className='flex flex-row mx-10 space-x-12'>
//        <img src="html-5.png" className='h-24 w-24 mt-12' alt="html" />
//        <img src="css-3.png" className='h-24 w-24 mt-12' alt="css" />
//        <img src="bootstrap.png" className='h-24 w-24 mt-12' alt="bootstrap" />
//        </div>
//        <div className='flex flex-row mx-12 space-x-12'>
//        <img src="js.png" className='h-24 w-24 mt-12' alt="js" />
//        <img src="library.png" className='h-24 w-24 mt-12' alt="react" />
//        <img src="tailwindcss.png" className='h-24 w-24 mt-12' alt="tailwind" />
//        </div>
       
        
//       </div>
//      </div>
//     </>
//   )
// }

// export default Skills;