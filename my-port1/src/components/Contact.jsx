import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/sushil-kumar-rajpoot-3967101b4/", "_blank");
  };

  const handleGmail = () => {
    window.open("mailto:invertissushil5171@gmail.com", "_blank");
  };

  const handleGithub = () => {
    window.open("https://github.com/Sushilkumarra/Review", "_blank");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // send email using emailjs
    emailjs
      .send(
        "YOUR_SERVICE_ID", // 🔹 from EmailJS dashboard
        "YOUR_TEMPLATE_ID", // 🔹 your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: `Password: ${formData.password}`,
        },
        "YOUR_PUBLIC_KEY" // 🔹 your public key
      )
      .then(
        (result) => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", password: "" });
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-white text-black h-auto py-10 px-4">
      <h1 className="text-3xl mt-6 md:text-4xl text-center underline decoration-solid decoration-sky-600 mb-10">
        Contact Me
      </h1>

      {/* Social Icons */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-16 mb-12">
        <img
          src="linkedin.png"
          alt="Linkedin"
          className="h-16 w-16 cursor-pointer hover:scale-125 duration-700"
          data-aos="fade-left"
          data-aos-delay="250"
          onClick={handleLinkedin}
        />
        <img
          src="logo.png"
          alt="Email"
          className="h-16 w-16 cursor-pointer hover:scale-125 duration-700"
          data-aos="fade-down"
          data-aos-delay="250"
          onClick={handleGmail}
        />
        <img
          src="github.png"
          alt="Github"
          className="h-16 w-16 cursor-pointer hover:scale-125 duration-700"
          data-aos="fade-right"
          data-aos-delay="250"
          onClick={handleGithub}
        />
      </div>
      <div className=" text-xl text-blue-400  underline decoration-solid decoration-blue-400 border-spacing-1.0 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-16 mb-12">
        <a href="https://drive.google.com/file/d/1GOCmumPpxLLaS0qCiNv9LymI6ckEC8dh/view?usp=drivesdk" className="download-btn">
  Download Resume
</a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="flex justify-center">
        <div
          className="w-full md:w-96 p-6 space-y-4 bg-zinc-100 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div className="flex flex-col">
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="border-2 rounded-sm bg-gray-100 px-2 py-1"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Enter Your Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 rounded-sm bg-gray-100 px-2 py-1"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Enter Your Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="border-2 rounded-sm bg-gray-100 px-2 py-1"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-lime-400 h-10 w-full rounded-full hover:bg-pink-800 text-white font-semibold"
          >
            Login
          </button>

          


          {status && <p className="text-center mt-2">{status}</p>}
        </div>
      </form>
    </div>
  );
}

export default Contact;








// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Contact() {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   let handleLinkedin = () => {
//     window.open("https://www.linkedin.com/in/sushil-kumar-rajpoot-3967101b4/", "_blank");
//   };

//   let handleGmail = () => {
//     window.open("mailto:invertissushil5171@gmail.com", "_blank");
//   };

//   let handleGithub = () => {
//     window.open("https://github.com/Sushilkumarra/Review", "_blank");
//   };

//   return (
//     <div className="bg-white text-black h-auto py-10 px-4">
//       {/* Heading */}
//       <h1 className="text-3xl mt-6 md:text-4xl text-center underline decoration-solid decoration-sky-600 mb-10">
//         Contact Me
//       </h1>

//       {/* Social Icons */}
//       <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-16 mb-12">
//         <img
//           src="linkedin.png"
//           alt="Linkedin"
//           className="h-16 w-16 cursor-pointer hover:scale-125 duration-700"
//           data-aos="fade-left"
//           data-aos-delay="250"
//           onClick={handleLinkedin}
//         />
//         <img
//           src="logo.png"
//           alt="Email"
//           className="h-16 w-16 cursor-pointer hover:scale-125 duration-700"
//           data-aos="fade-down"
//           data-aos-delay="250"
//           onClick={handleGmail}
//         />
//         <img
//           src="github.png"
//           alt="Github"
//           className="h-16 w-16 cursor-pointer hover:scale-125 duration-700"
//           data-aos="fade-right"
//           data-aos-delay="250"
//           onClick={handleGithub}
//         />
//       </div>

//       {/* Contact Form */}
//       <form className="flex justify-center">
//         <div
//           className="w-full md:w-96 p-6 space-y-4 bg-zinc-100 rounded-lg shadow-md"
//           data-aos="fade-up"
//           data-aos-delay="250"
//         >
//           <div className="flex flex-col">
//             <label htmlFor="name">Enter Your Name</label>
//             <input
//               type="text"
//               id="name"
//               className="border-2 rounded-sm bg-gray-100 px-2 py-1"
//               placeholder="Enter your name"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="email">Enter Your Email</label>
//             <input
//               type="email"
//               id="email"
//               className="border-2 rounded-sm bg-gray-100 px-2 py-1"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="password">Enter Your Password</label>
//             <input
//               type="password"
//               id="password"
//               className="border-2 rounded-sm bg-gray-100 px-2 py-1"
//               placeholder="Enter your password"
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-lime-400 h-10 w-full rounded-full hover:bg-pink-800 text-white font-semibold"
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Contact;
