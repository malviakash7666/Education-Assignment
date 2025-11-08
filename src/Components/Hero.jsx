import React from "react";
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
const Hero = () => {
  useGSAP(()=>{
  const t1 = gsap.timeline()
    t1.from("header h1",{
      y:-300,
      duration:1.5,
      opacity:1
    });
    t1.from("header p",{
      opacity:0,
      duration:0.4,
      y:100
    })
    t1.from("header button",{
      opacity:0,
      duration:0.4,
      y:100
    })
    t1.from("header img",{
      opacity:0,
      duration:0.4,
      y:200
    })
  })
  return (
    <div>
      <header className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  Learn Anytime, <br /> 
                  <span className="text-blue-500 ">Grow Everywhere</span>
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Join thousands of learners upgrading their skills with our expert-led courses.
  Start your journey toward a better career today.
                </p>

                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                   Start Learning
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src="https://merakiui.com/images/components/Catalogue-pana.svg"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
