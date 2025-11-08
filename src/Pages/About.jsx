import React from "react";
import learn from "../assets/learning.jfif";

const About = () => {
  return (
    <>
      <h1 className="text-3xl mt-10 font-semibold text-center mx-auto">
        About Our Learning App
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
        A smart platform that makes education simple, interactive, and accessible
        for every learner — anytime, anywhere.
      </p>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
        <img
          src={learn}
          alt="Learning illustration"
          className="w-full max-w-sm rounded-2xl shadow-lg"
        />

        <div>
          <h1 className="text-3xl font-semibold">Our Latest Features</h1>
          <p className="text-sm text-slate-500 mt-2">
            We provide modern learning tools designed to improve focus,
            performance, and skill development for students of all levels.
          </p>

          <div className="flex flex-col gap-10 mt-6">
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077976.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
                  Interactive Learning
                </h3>
                <p className="text-sm text-slate-500">
                  Learn with videos, quizzes, and fun activities that make studying enjoyable.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
                  Progress Tracking
                </h3>
                <p className="text-sm text-slate-500">
                  Track your daily learning progress and see your growth instantly.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
                  Certificates & Rewards
                </h3>
                <p className="text-sm text-slate-500">
                  Earn certificates and badges for completing your courses successfully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
