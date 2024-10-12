
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col pt-4 border-t border-gray-600 gap-8 md:flex-row justify-center items-center">
          <p className="text-gray-400">
            {" "}
            ©copy All Rights are Reserved {new Date().getFullYear()}
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a className="text-gray-400 hover:text-white" href="#">
              <FaGithub />
            </a>
            <a className="text-gray-400 hover:text-white" href="#">
              <FaTwitter />
            </a>
            <a className="text-gray-400 hover:text-white" href="#">
              <FaMedium />
            </a>
            <a className="text-gray-400 hover:text-white" href="#">
              <FaLinkedin />
            </a>
            <a className="text-gray-400 hover:text-white" href="#">
              <FaFacebook />
            </a>
          </div>
          <div className="flex space-x-4">
            <a className="text-gray-400 hover:text-white" href="#">
              Privacy
            </a>
            <a className="text-gray-400 hover:text-white" href="#">
              Term of Services
            </a>
          </div>
        </div>{" "}
      </div>
    </footer>
  );
};

export default Footer;
