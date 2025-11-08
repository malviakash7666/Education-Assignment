import React from 'react'
import card2 from "../assets/card2.jfif"
import apt from "../assets/apt.jfif"
import dsa from "../assets/dsa.png"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)
const CourseCard = () => {
  const t1 = gsap.timeline()
  useGSAP(()=>{
    t1.from(".gsap-h1",{
      y:100,
      opacity:0,
      
      scrollTrigger:{
        trigger:".gsap-h1",
        start:"top 80%",
        end:"top 30%",
        scrub:true,
     
      }
    })
  })
  return (
    <div>
       <section className="bg-gray-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gsap-h1">
          Popular Courses
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:-translate-y-2 hover:shadow-lg transition">
            <img
              src={card2}
              alt="Course Thumbnail"
              className="rounded-lg mb-4 w-full h-44 object-cover hover:scale-110 "
            />
            <h3 className="text-xl font-semibold mb-2">
              Full Stack Web Development
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Learn to build complete web apps using MERN stack with real-world projects.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-blue-400 font-medium">₹4999</span>
              <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 text-sm cursor-pointer">
                Enroll Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:-translate-y-2 hover:shadow-lg transition">
            <img
              src={dsa}
              alt="Course Thumbnail"
              className="rounded-lg mb-4 w-full h-44 object-cover hover:scale-110"
            />
            <h3 className="text-xl font-semibold mb-2">
              Data Structures & Algorithms
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Master problem-solving with hands-on DSA questions in JavaScript.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-blue-400 font-medium">₹2999</span>
              <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 text-sm cursor-pointer">
                Enroll Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:-translate-y-2 hover:shadow-lg transition">
            <img
              src={apt}
              alt="Course Thumbnail"
              className="rounded-lg mb-4 w-full h-44 object-cover hover:scale-110"
            />
            <h3 className="text-xl font-semibold mb-2">
              Aptitude & Reasoning Mastery
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Boost your logical thinking and aptitude skills for top placements.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-blue-400 font-medium">₹1999</span>
              <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 text-sm cursor-pointer">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default CourseCard
