import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  const projects = [
    {
      title: "REVV.COM",
      desc: "A rental car web application provides varieties of car on rent",
      features: [
        "Wishlist Features",
        "Provided filters for user convenience",
        "User interactive interface",
      ],
      tech: "HTML, CSS, JavaScript, React.js",
      img: "Movieapp.png",
    },
    {
      title: "Movie App",
      desc: "A movie search and booking application",
      features: [
        "Search movies by category",
        "Wishlist favorite movies",
        "Responsive design",
      ],
      tech: "React.js, Tailwind CSS, API",
      img: "Movieapp.png",
    },
    {
      title: "E-commerce Clone",
      desc: "An e-commerce clone with product listing and cart",
      features: [
        "Add to cart functionality",
        "Search and filter products",
        "Responsive UI",
      ],
      tech: "React.js, CSS, JavaScript",
      img: "Movieapp.png",
    },
  ];

  return (
    <div className="bg-black text-white  overflow-x-hidden">
      <h1 className="text-3xl md:text-4xl underline decoration-sky-600 text-center py-8">
        My Projects
      </h1>

      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 px-4 md:px-12 py-12"
        >
          {/* Image */}
          <div
            className="w-full md:w-1/2 flex justify-center"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay="250"
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-lg w-full max-w-sm sm:max-w-md object-contain"
            />
          </div>

          {/* Details */}
          <div
            className="w-full md:w-1/2 space-y-4 px-2"
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            data-aos-delay="250"
          >
            <h2 className="text-xl md:text-2xl font-bold">{project.title}</h2>
            <p className="text-sm md:text-base">{project.desc}</p>
            <h3 className="font-semibold">Features:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <h3 className="font-semibold">Tech Stack:</h3>
            <p className="text-sm md:text-base">{project.tech}</p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition">
                Deploy
              </button>
              <button className="bg-red-300 px-5 py-2 rounded-lg hover:bg-red-400 transition">
                Code
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;






// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Projects() {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const projects = [
//     {
//       title: "REVV.COM",
//       desc: "A rental car web application provides varieties of car on rent",
//       features: [
//         "Wishlist Features",
//         "Provided filters for user convenience",
//         "User interactive interface",
//       ],
//       tech: "HTML, CSS, JavaScript, React.js",
//       img: "Movieapp.png",
//     },
//     {
//       title: "Movie App",
//       desc: "A movie search and booking application",
//       features: [
//         "Search movies by category",
//         "Wishlist favorite movies",
//         "Responsive design",
//       ],
//       tech: "React.js, Tailwind CSS, API",
//       img: "Movieapp.png",
//     },
//     {
//       title: "E-commerce Clone",
//       desc: "An e-commerce clone with product listing and cart",
//       features: [
//         "Add to cart functionality",
//         "Search and filter products",
//         "Responsive UI",
//       ],
//       tech: "React.js, CSS, JavaScript",
//       img: "Movieapp.png",
//     },
//   ];

//   return (
//     <div className="bg-black text-white">
//       <h1 className="text-4xl underline decoration-sky-600 text-center py-8">
//         My Projects
//       </h1>

//       {projects.map((project, index) => (
//         <div
//           key={index}
//           className={`flex flex-col md:flex-row items-center md:items-start justify-center gap-8 px-6 py-12`}
//         >
//           {/* Image */}
//           <div
//             className="w-full md:w-1/2"
//             data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
//             data-aos-delay="250"
//           >
//             <img
//               src={project.img}
//               alt={project.title}
//               className="rounded-lg w-full max-w-md mx-auto"
//             />
//           </div>

//           {/* Details */}
//           <div
//             className="w-full md:w-1/2 space-y-4"
//             data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
//             data-aos-delay="250"
//           >
//             <h2 className="text-2xl font-bold">{project.title}</h2>
//             <p>{project.desc}</p>
//             <h3 className="font-semibold">Features:</h3>
//             <ul className="list-disc list-inside space-y-1">
//               {project.features.map((f, i) => (
//                 <li key={i}>{f}</li>
//               ))}
//             </ul>
//             <h3 className="font-semibold">Tech Stack:</h3>
//             <p>{project.tech}</p>

//             <div className="flex space-x-4">
//               <button className="bg-red-600 px-6 py-2 rounded-lg">
//                 Deploy
//               </button>
//               <button className="bg-red-300 px-6 py-2 rounded-lg">Code</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Projects;






// import React from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react"

   


// function Projects() {

//   useEffect(() => {
//     AOS.init();
//   }, []);


//   return (
//     <>
//      <div className='flex flex-row h-screen bg-black  text-white'> 
     
//      <div className='w-1/2 p-8' data-aos = "fade-right" data-aos-delay="250">
//      <img src="Movieapp.png" className='mt-20' alt="Movieapp" />
//      </div> 
//      <h1 className='text-4xl w-0 h-0 underline decoration-solid decoration-sky-600 '>MyProject</h1>
//      <div className='w-1/2 h-40 pt-24 ml-14 space-y-4' data-aos = "fade-left" data-aos-delay="250">
//      <h1>REVV.COM</h1>
//      <p>A rental car web application provides varities of car on rent</p>
//      <h1>Features:</h1>
//      <h>1. Wishlist Features</h>
//      <h3>2. Provided filters for user convenience</h3>
//      <h3>3. User intractive interface</h3>
//      <h1>Tech Stack:</h1>
//      <p>Html, Css, Javascript, Rectjs</p>
//      <div className='flex flex-row space-x-4'>
//       <button className='bg-red-600 p-4 text-center rounded-lg' >Deploy</button>
//       <button className='bg-red-300  p-4 text-center rounded-lg'>Code</button>
//      </div>
//      </div> 
//      </div> 

//      <div className='flex flex-row h-screen bg-black  text-white'> 
     
//      <div className='w-1/2 p-8' data-aos = "fade-right" data-aos-delay="250">
//      <img src="Movieapp.png" className='mt-20' alt="Movieapp" />
//      </div> 
     
//      <div className='w-1/2 h-40 pt-24 ml-14 space-y-4' data-aos = "fade-left" data-aos-delay="250">
//      <h1>REVV.COM</h1>
//      <p>A rental car web application provides varities of car on rent</p>
//      <h1>Features:</h1>
//      <h>1. Wishlist Features</h>
//      <h3>2. Provided filters for user convenience</h3>
//      <h3>3. User intractive interface</h3>
//      <h1>Tech Stack:</h1>
//      <p>Html, Css, Javascript, Rectjs</p>
//      <div className='flex flex-row space-x-4 '>
//       <button className='bg-red-600  p-4 text-center  rounded-lg' >Deploy</button>
//       <button className='bg-red-300  p-4 text-center rounded-lg'>Code</button>
//      </div>
//      </div> 
//      </div> 

//      <div className='flex flex-row h-screen bg-black  text-white'> 
     
//      <div className='w-1/2 p-8' data-aos = "fade-right" data-aos-delay="250">
//      <img src="Movieapp.png" className='mt-20' alt="Movieapp" />
//      </div> 
     
//      <div className='w-1/2 h-40 pt-24 ml-14 space-y-4' data-aos = "fade-left" data-aos-delay="250">
//      <h1>REVV.COM</h1>
//      <p>A rental car web application provides varities of car on rent</p>
//      <h1>Features:</h1>
//      <h>1. Wishlist Features</h>
//      <h3>2. Provided filters for user convenience</h3>
//      <h3>3. User intractive interface</h3>
//      <h1>Tech Stack:</h1>
//      <p>Html, Css, Javascript, Rectjs</p>
//      <div className='flex flex-row space-x-4 '>
//       <button className='bg-red-600   p-4 text-center rounded-lg' >Deploy</button>
//       <button className='bg-red-300  p-4 text-center rounded-lg'>Code</button>
//      </div>
//      </div> 
//      </div> 
//     </>
//   )
// }

// export default Projects;