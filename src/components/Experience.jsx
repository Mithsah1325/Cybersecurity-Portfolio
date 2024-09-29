import React from "react";

const Experience = () => {
  const experience = [
    {
      id: 1,
      role: "Teaching Assistant",
      organisation: "Northern Kentucky University",
      startDate: "Aug 2024",
      endDate: "Present",
      location: "Kentucky, United States",
      experiences: [
        "Assist 40+ students with hands-on labs focusing on network security, ethical hacking, and incident response, resulting in a 15% increase in exam performance.",
        "Manage weekly office hours and problem-solving sessions for 40+ students, contributing to a 25% reduction in student drop-out rates and a 10% improvement in average grades.",
        "Design and implement 5+ interactive cybersecurity challenges, increasing student engagement by 30% and improving hands-on learning outcomes."
      ],
      imageSrc: "https://www.nku.edu/content/dam/microcredantials/images/logo-nku-micro-credentials.png",
    },
    {
      id: 2,
      role: "Undergraduate Center for Information Security",
      organisation: "Northern Kentucky University",
      startDate: "May 2024",
      endDate: "Present",
      location: "Kentucky, United States",
      experiences: [
        "Enhancing and optimizing the CIS web application by designing and testing new features, boosting student engagement by 30%.",
        "Collaborate with the Software Development team to maintain and optimize the CIS Website, increasing performance by 20% through targeted improvements.",
        "Format and revise 7+ research papers for Spring conference submissions, achieving a 100% acceptance rate for all papers."
      ],
      imageSrc: "https://www.nku.edu/content/dam/microcredantials/images/logo-nku-micro-credentials.png",
    },
    {
      id: 3,
      role: "Kentucky Cybersecurity and Forensics Conference (KCFC)",
      organisation: "Northern Kentucky University",
      startDate: "Aug 2024",
      endDate: "Present",
      location: "Kentucky, United States",
      experiences: [
        "Spearheaded promotional campaigns to enhance conference visibility, including outreach to potential attendees and partners, resulting in a 37% increase in registration.",
        "Contribute to the development of a program agenda focused on AI and security measures, resulting in a 20% increase in sponsors."
      ],
      imageSrc: "https://www.nku.edu/content/dam/microcredantials/images/logo-nku-micro-credentials.png",
    },
  ];

  return (
    <section className="container py-10" id="experience">
      <h1 className="font-bold py-10">EXPERIENCES</h1>
      {experience.map((data) => (
        <div
          key={data.id}
          className="flex flex-col md:flex-row items-center my-5 p-4 border border-gray-300 rounded-lg shadow-lg"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="flex-shrink-0 mb-2 md:mb-0 md:mr-6">
            <img
              src={data.imageSrc}
              alt={data.organisation}
              className="w-33 h-32 object-cover rounded-full"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-xl font-semibold mb-2">{data.role}</h2>
            <h4 className="text-lg mb-2">
              <span className="text-green-500">
                {data.startDate} - {data.endDate}
              </span>{" "}
              <span className="text-yellow-500">{data.location}</span>
            </h4>
            {data.experiences.map((exp, index) => (
              <p key={index} className="text-green-500 mb-1">
                {exp}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
