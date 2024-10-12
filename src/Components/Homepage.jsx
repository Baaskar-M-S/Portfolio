import img1 from "./img.jpg";
const Homepage = () => {
    return (
        <div className="bg-black text-white text-center py-16 ">
            <img
                src={img1}
                alt="img"
                className=" mx-auto mb-8 w-48 h-48 rounded-full object-cover
      transform transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-4xl font-bold">
                I'm{" "}
                <span
                    className="text-transparent bg-clip-text 
      bg-gradient-to-r from-green-400 to-blue-500 "
                >
                    {" "}
                    M S Baaskar{" "}
                </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 ">Frontend Developer</span>  
            </h1>
            <p className="mt-4 text-lg text-gray-300 ">
                I'm a passionate frontend developer with a strong focus on creating <br />
                user-friendly and visually appealing interfaces.{" "}
            </p>
            <p className="mt-4 text-lg text-gray-300 ">
                I'm always looking for new challenges and opportunities <br /> to learn and
                grow.
            </p>
            <div className="mt-8 space-x-4">
                <button
                    className="bg-gradient-to-r from-red-400 to-green-500
 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                >
                    Contact With Me
                </button>
                <button
                    className="bg-gradient-to-r from-pink-400 to-yellow-500
 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                >
                    Resume
                </button>
            </div>
        </div>
    );
};

export default Homepage;
