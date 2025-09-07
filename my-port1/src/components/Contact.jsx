import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  let handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/sushil-kumar-rajpoot-3967101b4/", "_blank");
  };

  let handleGmail = () => {
    window.open("mailto:invertissushil5171@gmail.com", "_blank");
  };

  let handleGithub = () => {
    window.open("https://github.com/Sushilkumarra/Review", "_blank");
  };

  return (
    <div className="bg-white text-black h-auto py-10 px-4">
      {/* Heading */}
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

      {/* Contact Form */}
      <form className="flex justify-center">
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
              className="border-2 rounded-sm bg-gray-100 px-2 py-1"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Enter Your Email</label>
            <input
              type="email"
              id="email"
              className="border-2 rounded-sm bg-gray-100 px-2 py-1"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Enter Your Password</label>
            <input
              type="password"
              id="password"
              className="border-2 rounded-sm bg-gray-100 px-2 py-1"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="bg-lime-400 h-10 w-full rounded-full hover:bg-pink-800 text-white font-semibold"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
