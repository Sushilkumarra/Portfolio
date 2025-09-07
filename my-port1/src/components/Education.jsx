import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"


function Education() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (


    <>
      <div className='  h-full w-full bg-slate-200'>
      <div >
          <h1 className='text-4xl text-center underline decoration-solid decoration-sky-600 '>Education</h1>
        </div>
        <div className='flex flex-row text-center  space-x-32 p-10 ml-72'>
        <div className='h-64 w-60 p-14 space-y-3 bg-slate-100 'data-aos = "fade-right" data-aos-delay="250" >
          <h1>Intermidiate(Science)</h1>
          <h3>S.K.Inter Collage Budaun, Utter Pradesh.</h3>
          <h3>June-2016</h3>
        </div>
        <div className='h-64 w-60 p-14 space-y-3 bg-slate-100  ' data-aos = "fade-left" data-aos-delay="250">
          <h1>
            B.Tech(Computer Science)
          </h1> 
          <h1>Invertis University Bareilly Utter, Pradesh.</h1>
          <h1>July2019 - June2023 </h1>
        </div>
        </div>
        <div className=' ml-96 h-64 w-60 p-14 space-y-3 bg-slate-100  ' data-aos = "fade-up" data-aos-delay="250">
          <h1>Juniur Full Stack Java Developer</h1>
          <h1>Edujobs Academy pvt. ltd</h1>
          <h1>July2023 - novamber2023</h1>
        </div>
      </div>

    </>
  )
}

export default Education ;