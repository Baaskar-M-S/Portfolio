const ServiceData = [
  {
    id: 1,
    title: " Web Design",
    description: " Creating visually appealing and user-Friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development ",
    description: "Building responsive and interactive user interfaces",
  },
  {
    id: 3,
    title: " Backend Development",
    description: "Developing robust server-side logic and databases",
  },
  {
    id: 4,
    title: "UI/UX",
    description: "Design prototype of web application ",
  },
  {
    id: 5,
    title: "Content Writing",
    description: " Writing content for your business and companies",
  },
];

const ServicePage = () => {
  return (
    <div className="bg-black text-white py-20 " id="service">
      <div className="container mx-auto px-8 md:px-16 ">
        <h1 className="text-4xl font-bold text-center mb-12">My Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServiceData.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg
transform transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text
bg-gradient-to-r from-green-400 to-blue-500"
              >
                {service.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text
bg-gradient-to-r from-green-400 to-blue-500"
              >
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300 ">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </a>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
