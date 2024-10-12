import React from "react";
import img1 from './img.jpg'
const ProjectData = [
  {
    id: 1,
    name: "E-Commerce-Site",
    technologies: "Html & CSS",
    img: img1,
    github: "https://github.com/baaskar-ms",
  },
  {
    id: 2,
    name: "ToDo List",
    technologies: "JavaScript",
    img: img1,
    github: "https://github.com/baaskar-ms",
  },
  {
    id: 3,
    name: "Calculator",
    technologies: "Javascript",
    img: img1,
    github: "https://github.com/baaskar-ms",
  },
  {
    id: 4,
    name: "Bike E-Commerce Site",
    technologies: "Html & CSS",
    img: img1,
    github: "https://github.com/baaskar-ms",
  },
  {
    id: 5,
    name: "Mynthra Clone",
    technologies: "React",
    img: img1,
    github: "https://github.com/baaskar-ms",
  },
  {
    id: 6,
    name: "Portfolio",
    technologies: "React",
    img: img1,
    github: "https://github.com/baaskar-ms",
  },
];

const ProjectPage = () => {
  return (
    <div className="bg-black text-white py-20 " id="project">
      <div className="container mx-auto px-8 md:px-16 ">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectData.map((e) => (
            <div key={e.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img src={e.img} alt={e.name} className="rounded-lg mb-4 w-full h-48 object-cover " />
                <h3 className="text-2xl font-bold mb-2">{e.name}</h3>
                <p className="text-gray-400 mb-4">{e.technologies}</p>
                <a className="inline-block px-4 py-2 text-white rounded-full bg-gradient-to-r from-green-500 to-blue-600" href={e.github}>Github</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
