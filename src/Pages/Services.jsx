import React from "react";

const Services = () => {
  const services = [
    {
      title: "Live Courses & className",
      desc: "Learn directly from industry mentors through structured live sessions and projects.",
      icon: "🎓",
    },
    {
      title: "Internship Programs",
      desc: "Work on real company projects and gain practical experience while learning.",
      icon: "💼",
    },
    {
      title: "Career Mentorship",
      desc: "Get personalized career guidance and resume-building help from experts.",
      icon: "🧭",
    },
    {
      title: "Skill Tests & Challenges",
      desc: "Participate in mock tests, hackathons, and quizzes to test your skills.",
      icon: "🧠",
    },
  ];

  return (
    <section className=" text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:-translate-y-2 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
