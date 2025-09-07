import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 overflow-x-hidden">
      <div className="flex justify-between items-center px-4 md:px-8 py-3 max-w-7xl mx-auto">
        {/* Brand */}
        <a href="#" className="text-xl md:text-2xl font-bold whitespace-nowrap">
          Sushil Kumar
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 text-base lg:text-lg">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                end
                to={link.path}
                className={({ isActive }) =>
                  `transition hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoCloseSharp /> : <IoMdMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-white shadow-lg border-t overflow-x-hidden">
          <ul className="flex flex-col items-center space-y-4 py-6 text-lg">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  end
                  to={link.path}
                  className={({ isActive }) =>
                    `transition hover:text-blue-600 ${
                      isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`
                  }
                  onClick={() => setMenu(false)} // close menu on click
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;





// import { IoMdMenu } from "react-icons/io";
// import { IoCloseSharp } from "react-icons/io5";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// function Navbar() {
//   const [menu, setMenu] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Skills", path: "/skills" },
//     { name: "Education", path: "/education" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//     { name: "Resume", path: "/resume" },
//   ];

//   return (
//     <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
//       <div className="flex justify-between items-center px-6 py-3 container mx-auto">
//         {/* Brand */}
//         <a href="#" className="text-2xl font-bold">
//           Sushil Kumar
//         </a>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-lg">
//           {navLinks.map((link, index) => (
//             <li key={index}>
//               <NavLink
//                 exact="true"
//                 to={link.path}
//                 className="hover:text-blue-600 transition"
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden text-3xl cursor-pointer" onClick={() => setMenu(!menu)}>
//           {menu ? <IoCloseSharp /> : <IoMdMenu />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menu && (
//         <div className="md:hidden bg-white shadow-lg">
//           <ul className="flex flex-col items-center space-y-4 py-6 text-lg">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <NavLink
//                   exact="true"
//                   to={link.path}
//                   className="hover:text-blue-600 transition"
//                   onClick={() => setMenu(false)} // close menu on click
//                 >
//                   {link.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;






//      <div className='w-1/3'>
//       <ul className="hidden md:flex text-lg mx-60  space-x-6 ">
//         <li className="nav-item hover:text-blue-600  ">
//           <NavLink className="nav-link" exact to='/'>
//           Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link hover:text-blue-600" exact to='/about'>
//           About</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link hover:text-blue-600" exact to='/Skills'>
//           Skills</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link hover:text-blue-600" exact to='/Education'>
//           Education</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link hover:text-blue-600" exact to='/Projects'>
//           Projects</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link hover:text-blue-600" exact to='/contact'>
//           Contact</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link hover:text-blue-600 " exact to='/Resume'>
//           Resume</NavLink>
//         </li>
        
//       </ul>
//       <div className="flex p-2 file:"><div onClick={() =>setMenu(!menu)} className="md:hidden">
//       {menu?<IoMdMenu />:<IoCloseSharp />}
//       </div>
//       </div>
      
//     </div>

    

//    <div className=" md:hidden text-lg ml-0 h-screen flex flex-col items-center justify-center space-y-2 ">
//    <ul >
//         <li className="nav-item hover:text-blue-600  ">
//           <NavLink className="nav-link " exact to='/'
//           >Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link hover:text-blue-600" exact to='/about'>
//           About</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link hover:text-blue-600" exact to='/Skills'>
//           Skills</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link hover:text-blue-600" exact to='/Education'>
//           Education</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link hover:text-blue-600" exact to='/Projects'>
//           Projects</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link hover:text-blue-600" exact to='/contact'>
//           Contact</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link hover:text-blue-600 " exact to='/Resume'>
//           Resume</NavLink>
//         </li>
        
//       </ul>
//    </div>

//    </div>
  
//     </>
//   )
// }

// export default Navbar;