import Logo from "../../assets/apna_driver_logo.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="2xl:px-56 xl:px-28 lg:px-14 md:px-7 sm:px-3 px-2 pt-24 bg-gradient-to-b from-[#ffffff] to-[#c5eaf9]">
      <div className=" pb-6 text-center">
        <div className="md:flex ">
          <div className="md:flex-1 hidden md:block">
            <img src={Logo} className="h-10 w-20 py-2 ml-auto mr-auto" alt="" />
            <p className=" font-bold text-lg pb-2">Follow Us</p>
            <div className="flex space-x-4 justify-center">
              <Link><BsFacebook className=" text-2xl"/></Link>
              <Link><BsInstagram className=" text-2xl" /></Link>
              <Link><BsYoutube className=" text-2xl" /></Link>
              <Link><BsTwitter className=" text-2xl" /></Link>
              <Link><BsLinkedin className=" text-2xl" /></Link>
            </div>
          </div>
          <div className="md:flex-1 flex-col pb-4">
            <h3 className="font-bold">Important Links</h3>
            <Link><h4 className="text-gray-500 font-semibold">Contact Us</h4></Link>
            <Link to={"/"}><h4 className="text-gray-500 font-semibold">Home</h4></Link>
            <Link><h4 className="text-gray-500 font-semibold">Blog</h4></Link>
          </div>
          <div className="md:flex-1 flex-col pb-4">
            <h3 className="font-bold">Services</h3>
            <Link><h4 className="text-gray-500 font-semibold">Hire a Temporary Driver</h4></Link>
            <Link><h4 className="text-gray-500 font-semibold">Hire Hourly Driver</h4></Link>
            <Link><h4 className="text-gray-500 font-semibold">ApnaDriver Offers</h4></Link>
            <Link><h4 className="text-gray-500 font-semibold">Hire a Driver</h4></Link>
          </div>
          <div className="md:flex-1 flex-col pb-4">
            <h3 className="font-bold">For Business</h3>
            <Link><h4 className="text-gray-500 font-semibold">Join as Driver Partner</h4></Link>
            <Link><h4 className="text-gray-500 font-semibold">Hire Drivers For B2B</h4></Link>
          </div>
          <div className="md:flex-1 md:hidden">
            <img src={Logo} className="h-10 w-20 py-2 ml-auto mr-auto" alt="" />
            <h3 className=" font-bold pb-2">Follow Us</h3>
            <div className="flex space-x-4 justify-center">
              <BsFacebook className=" text-xl" />
              <BsInstagram className=" text-xl" />
              <BsYoutube className=" text-xl" />
              <BsTwitter className=" text-xl" />
              <BsLinkedin className=" text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Copyright --> */}
      <div className="text-center">
        <div className="px-2 sm:px-8 md:grid md:grid-cols-4 text-sm font-semibold">
          <p className="pb-2">
            <a href="#" className="">Article Details</a>
          </p>
          <p className="pb-2">
            <a href="#" className="">Terms & Conditions</a>
          </p>
          <p className="pb-2">
            <a href="#" className="">Privacy Policy</a>
          </p>
          <p className="pb-2 ">
            Copyright ©
            <a href="#your-link" className="no-underline text-gray-500">
              Gangesh
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
