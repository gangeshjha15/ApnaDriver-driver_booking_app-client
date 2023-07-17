import BookingDriver from "../modal/BookingDriver";
import { useState } from "react";
import CarDriving from "../../assets/car_driving.svg";

import Footer from "../footer/Footer";
import Testimonial from "../testimonial/Testimonial";
import Counter from "../counter/Counter";
import ServiceCards from "../cards/ServiceCards";
import ServiceDetails from "../services/ServiceDetails";

import Image1 from "../../assets/testimonial-1.jpg";
import Image2 from "../../assets/testimonial-2.jpg";
import Image3 from "../../assets/testimonial-3.jpg";
import Image4 from "../../assets/testimonial-4.jpg";
import Image5 from "../../assets/testimonial-5.jpg";
import Image6 from "../../assets/testimonial-6.jpg";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const testimonial = [
    {
      name: "Jude Thorn - Designer",
      description:
        "It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great",
      image: Image1,
    },
    {
      name: "Roy Smith - Developer",
      description:
        "We were so focused on launching as many campaigns as possible that we've forgotten to target our loyal customers",
      image: Image2,
    },
    {
      name: "Marsha Singer - Marketer",
      description:
        "I've been searching for a tool like Pavo for so long. I love the reports it generates and the amazing high accuracy",
      image: Image3,
    },
    {
      name: "Tim Shaw - Designer",
      description:
        "We've been waiting for a powerful piece of software that can help businesses manage their marketing projects",
      image: Image4,
    },
    {
      name: "Lindsay Spice - Marketer",
      description:
        "Searching for a great prototyping and layout design app was difficult but thankfully I found app suite quickly",
      image: Image5,
    },
    {
      name: "Ann Blake - Developer",
      description:
        "The app support team is amazing. They've helped me with some issues and I am so grateful to the entire team",
      image: Image6,
    },
  ];
  const testimonialText = 'What do users think about ApnaDriver';

  return (
    <>
      <main>
        <header className=" 2xl:px-56 xl:px-28 lg:px-14 md:px-7 sm:px-3 pt-16 lg:pt-0 text-center lg:text-left ">
          <div className="px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="mb-20 lg:mt-32 xl:mt-40 xl:mr-6 xl:ml-6">
              <h3 className="text-[#127E40] font-semibold">
                SIMPLIFY CAR OWNERSHIP
              </h3>
              <h1 className="font-sans leading-normal font-black mt-7 uppercase">
                Hire professional drivers, and all car services at your
                fingertips.
              </h1>
              <h4 className=" text-slate-500 mt-10 p-large mb-10">
                Get rewarded for owning a car!
              </h4>
              <div className="grid md:grid-cols-2 gap-5">
                <button
                  className="bg-[#000] border-[1px] border-[#000] text-white px-8 py-8 pt-4 pb-4 hover:bg-transparent hover:text-[#000] hover:transition-colors hover:duration-300 text-md"
                  onClick={() => setShowModal(true)}
                >
                  Book Driver
                </button>
                <button className="bg-[#F9BA5B] border-[1px] border-[#F9BA5B] text-white px-8 py-8 pt-4 pb-4 hover:bg-transparent hover:text-[#F9BA5B] hover:transition-colors hover:duration-300 text-md">
                  Join As Driver
                </button>
              </div>
            </div>
            <div className="items-center flex">
              {/* <img className="max-h-max" src={OrderRide} alt="" /> */}
              <img className="max-h-max" src={CarDriving} alt="" />
              {/* <img className="max-h-max" src={Navigator} alt="" /> */}
            </div>
          </div>
        </header>

        <BookingDriver showModal={showModal} setShowModal={setShowModal} />

        <div className="box-border 2xl:px-56 xl:px-28 lg:px-14 md:px-7 sm:px-3 pb-14 text-center">
          <div className="px-4 pt-4 sm:px-8 xl:px-4">
            <h1 className="text-black font-bold lg:max-w-5xl lg:mx-auto">
              Our Services
            </h1>
          </div>
        </div>
        {/* Services */}
        <section className="2xl:px-52 xl:px-20 lg:px-10 ">
          <ServiceCards />
        </section>
        <section className="2xl:px-52 xl:px-20 lg:px-10 ">
          <ServiceDetails />
        </section>

        {/* Counter */}
        <section className="2xl:px-56 xl:px-28 lg:px-14 md:px-7 sm:px-3">
          {/* counter */}
          <Counter />
        </section>

        {/* Testimonial */}
        <section className="2xl:px-56 xl:px-28 lg:px-14 md:px-7 sm:px-3 px-1 my-12">
          <Testimonial testimonial={testimonial} text={testimonialText}/>
        </section>
      </main>
      {/* Footer */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
