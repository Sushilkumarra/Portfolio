import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Education() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full bg-cyan-900  py-12 px-4 md:px-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl text-center underline decoration-solid decoration-sky-600 text-white mb-10">
        Education
      </h1>

      {/* Education Cards */}
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-10 space-y-6 md:space-y-0">
        {/* Card 1 */}
        <div
          className="h-auto w-full md:w-60 p-6 md:p-10 space-y-3 bg-slate-100 rounded-lg shadow-md"
          data-aos="fade-right"
          data-aos-delay="250"
        >
          <h1 className="font-semibold">Intermediate (Science)</h1>
          <h3>S.K. Inter College, Budaun, Uttar Pradesh</h3>
          <h3>June 2016</h3>
        </div>

        {/* Card 2 */}
        <div
          className="h-auto w-full md:w-60 p-6 md:p-10 space-y-3 bg-slate-100 rounded-lg shadow-md"
          data-aos="fade-left"
          data-aos-delay="250"
        >
          <h1 className="font-semibold">B.Tech (Computer Science)</h1>
          <h3>Invertis University, Bareilly, Uttar Pradesh</h3>
          <h3>July 2019 - June 2023</h3>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="mt-6 flex justify-center"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <div className="h-auto w-full md:w-60 p-6 md:p-10 space-y-3 bg-slate-100 rounded-lg shadow-md">
          <h1 className="font-semibold">Junior Full Stack Java Developer</h1>
          <h3>Edujobs Academy Pvt. Ltd</h3>
          <h3>July 2023 - November 2023</h3>
        </div>
      </div>
    </div>
  );
}

export default Education;
