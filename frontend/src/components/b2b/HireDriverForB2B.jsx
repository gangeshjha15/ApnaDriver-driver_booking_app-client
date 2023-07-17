import DrivingImage from "../../assets/business_section_img.svg";
import { Link } from "react-router-dom";
import Testimonial from "../testimonial/Testimonial";

import InternetWorld from "../../assets/internet-world.svg";
import Verified from "../../assets/verified.svg";
import Training from "../../assets/training.svg";
import TripInsurance from "../../assets/trip-insurance.svg";
import OnTimeSupport from "../../assets/on-time-support.svg";
import LiveTracking from "../../assets/tracking-track.svg";
import PaymentMethod from "../../assets/payment-method.svg";
import AnalyticsChart from "../../assets/analytics-chart.svg";
import Logo from "../../assets/apna_driver_logo.png";
import Footer from "../footer/Footer";

const HireDriverForB2b = () => {
  const testimonial = [
    {
      name: "Background Verified Drivers",
      description:
        "All drivers are thoroughly verified, and none with any cases are onboarded to ensure safety through and through.",
      image: Verified,
    },
    {
      name: "Trained & Uniformed",
      description:
        "Drivers are continually trained through our in-app learning system on various subjects such as processes, hygiene and customer service. Our drivers also wear recognizable and professional uniforms to make the best impressions.",
      image: Training,
    },
    {
      name: "Trip Insurance",
      description:
        "Relax in knowing that your vehicle is protected from the madness of these roads. Get coverage from the time our drivers take the keys!",
      image: TripInsurance,
    },
    {
      name: "On-Time & Fulfilment Guarantee",
      description:
        "With over 35,000 drivers on our platform, we can guarantee industry best SLAs to ensure top-notch customer experience and efficient operations that can handle any influx in volumes.",
      image: OnTimeSupport,
    },
    {
      name: "Live Tracking",
      description:
        "We’ve all heard “keep your customer informed” , and we’re here to solve that with live-tracking visible to you and your customer or operations team.",
      image: LiveTracking,
    },
    {
      name: "Online Payment Management System",
      description:
        "Leave cash in the past and send a payment link directly to your customer from the DriveU dashboard!",
      image: PaymentMethod,
    },
    {
      name: "Custom Analytics and Reports",
      description:
        "Track your team’s efficiency and performance with custom dashboards with rich up-to-the-second data, and detailed reports on a daily, weekly or monthly basis.",
      image: AnalyticsChart,
    },
    {
      name: "World-Class Technology",
      description:
        "Built in-house by industry veterans, our world-class customizable technology supports many processes and businesses throughout the transportation industry.",
      image: InternetWorld,
    },
  ];

  const testimonialText = "Product Features";

  return (
    <main>
      {/* <div className=" w-4/6 mx-auto"> */}

      <nav className="mx-auto flex max-w-full items-center justify-between p-2 lg:px-6   bg-gray-100 shadow-md sticky top-0 z-50">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            {/* <span className="sr-only">Apna Driver</span> */}
            <img className="h-10 w-auto" src={Logo} alt="" />
          </a>
        </div>

        <div className="lg:flex lg:flex-1 lg:justify-end md:pr-2">
          <Link to="/" className="text-sm font-semibold leading-6 text-black">
            Home
          </Link>
        </div>
      </nav>

      {/* heading */}
      <header className="bg-gradient-to-b from-gray-100 to-[#ffffff]">
        <section className="pt-16">
          <div className="text-center sm:px-16 xsm:px-8 px-1">
            <h1 className=" text-black font-bold ">
              On-demand drivers for your business from ApnaDriver
            </h1>
            <h3 className=" text-black font-medium pt-4">
              Professional, background verified, trained, uniformed drivers
            </h3>
          </div>
        </section>

        {/* form */}
        <section className=" mt-16">
          <div className="container w-auto sm:w-[600px] 2xl:w-[750px] bg-white rounded-t-2xl sm:flex transition-all shadow-2xl">
            <div className="sm:flex-1 my-auto">
              <img className="" src={DrivingImage} alt="" />
            </div>
            <div className="sm:flex-1  p-8">
              <h2 className="mb-8 text-center font-bold tracking-tight text-gray-900 uppercase">
                Request a demo
              </h2>

              <form className="space-y-6">
                <div>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Full Name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Company Name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Company Email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Contact Number"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </header>

      {/* testimonial */}
      <section className=" mt-16 px-2 xsm:px-4 sm:px-8 lg:px-12 2xl:px-24">
        <Testimonial testimonial={testimonial} text={testimonialText} />
      </section>

      <section className="px-[24px] pt-[40px] pb-[30px]">
        <div className="">
          <div className=" text-center mx-auto xl:mx-[140px]">
            <h1 className=" font-bold mb-6">Service Offerings</h1>
            <h3 className=" text-gray-500 px-[72px]">
              With state of the art technology and industry-best customer
              satisfaction, DriveU caters to a range of business needs wherever
              vehicle movement is required.
            </h3>
          </div>
        </div>

        {/* 1st service */}
        <div className=" ">
          <div className=" sm:flex pt-[72px] lg:px-[40px] sm:items-center ">
            <div className="sm:flex-1 px-[40px] sm:text-left text-center ">
              <h2 className="mb-[12px] font-bold">Pick and Drop</h2>
              <h3 className="mb-[24px] text-gray-500">
                Save on fixed expenses and manage any demand variations with
                on-demand drivers for intra-city pick and drop! Over the years,
                our clients have realized the advantages of working with our
                fleet to improve their efficiencies while reducing cost.
              </h3>
            </div>
            <div className="sm:flex-1 px-[24px] lg:px-[40px]">
              <img
                className=" w-[320px] lg:w-[480px] mx-auto"
                src="https://www.driveu.in/static/web/b2b/images/pick-drop.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 2nd service */}
        <div className=" ">
          <div className=" sm:flex pt-[72px] lg:px-[40px] sm:items-center ">
            <div className="sm:flex-1 px-[24px] lg:px-[40px]">
              <img
                className=" w-[320px] lg:w-[480px] mx-auto"
                src="https://www.driveu.in/static/web/b2b/images/test-drive.png"
                alt=""
              />
            </div>
            <div className="sm:flex-1 px-[40px] mt-5 sm:mt-0 sm:text-left text-center ">
              <h2 className="mb-[12px] font-bold">Test Drive Facilitation</h2>
              <h3 className="mb-[24px] text-gray-500">
                Increase your sales by letting our drivers assist your sales
                team with closing the deal by bringing test drives to your
                customer’s doorstep! Great for new model launches and used car
                sales!
              </h3>
            </div>
          </div>
        </div>
        {/* 3rd service */}
        <div className=" ">
          <div className=" sm:flex pt-[72px] lg:px-[40px] sm:items-center ">
            <div className="sm:flex-1 px-[40px] sm:text-left text-center ">
              <h2 className="mb-[12px] font-bold">Insurance Claim Process</h2>
              <h3 className="mb-[24px] text-gray-500">
                With in-app customizable processes, our drivers can assist your
                claims team by completing inspections and quickly moving your
                customer’s car to/from your service station partners.
              </h3>
            </div>
            <div className="sm:flex-1 px-[24px] lg:px-[40px]">
              <img
                className=" w-[320px] lg:w-[480px] mx-auto"
                src="https://www.driveu.in/static/web/b2b/images/damage-claim.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 4th service */}
        <div className=" ">
          <div className=" sm:flex pt-[72px] lg:px-[40px] sm:items-center ">
            <div className="sm:flex-1 px-[24px] lg:px-[40px]">
              <img
                className=" w-[320px] lg:w-[480px] mx-auto"
                src="https://www.driveu.in/static/web/b2b/images/inter-city.png"
                alt=""
              />
            </div>
            <div className="sm:flex-1 px-[40px] mt-5 sm:mt-0 sm:text-left text-center ">
              <h2 className="mb-[12px] font-bold">Intercity Movement</h2>
              <h3 className="mb-[24px] text-gray-500">
                Long lead times and costly trucking charges affecting your
                business? Move your vehicles quickly and cost-effectively from
                one city to another in just a few clicks!
              </h3>
            </div>
          </div>
        </div>
        {/* 5th service */}
        <div className=" ">
          <div className=" sm:flex pt-[72px] lg:px-[40px] sm:items-center ">
            <div className="sm:flex-1 px-[40px] sm:text-left text-center ">
              <h2 className="mb-[12px] font-bold">Corporate Fleet Drivers</h2>
              <h3 className="mb-[24px] text-gray-500">
                Say goodbye to staffing issues with DriveU’s well-groomed,
                trained, and uniformed drivers! All drivers are background
                checked and trained on the best customer service practices to
                always give your brand a polished image.
              </h3>
            </div>
            <div className="sm:flex-1 px-[24px] lg:px-[40px]">
              <img
                className=" w-[320px] lg:w-[480px] mx-auto"
                src="https://www.driveu.in/static/web/b2b/images/car-fleet.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="container">
          <div className="pricing-inner section-inner has-top-divider">
            <h2 className="section-title mt-0 text-center">
              Request a Callback
            </h2>
            <div className="pricing-tables-wrap">
              <div
                className="pricing-table is-revealing"
                style={{ visibility: "visible" }}
              >
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" action="#" method="POST">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Full Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Password
                        </label>
                        <div className="text-sm">
                          <a
                            href="#"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>

                  <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className=" mt-16">
        <h2 className="mb-8 text-center font-bold tracking-tight text-gray-900 uppercase">
          Request a callback
        </h2>
        <div className="container w-auto p-6 sm:w-[476px]  bg-white transition-all shadow-2xl">
          <div className="">
            <h3 className=" text-[#00C6A7] font-medium mb-4">Please fill this form to get in touch</h3>
            <form className="space-y-6">
              <div className="mt-2 text-center">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Full Name"
                  className=" w-2/3 bg-[#D8D8D8] rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#808080] placeholder:font-semibold focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2 text-center">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Company Name"
                  className="w-2/3 bg-[#D8D8D8] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#808080] placeholder:font-semibold focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2 text-center">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Company Email"
                  className="w-2/3 bg-[#D8D8D8] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#808080] placeholder:font-semibold focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2 text-center">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Contact Number"
                  className="w-2/3 bg-[#D8D8D8] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#808080] placeholder:font-semibold focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-2/3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>

            <ul className=" mt-8 mb-6">
              <li>
                <span className="inline-block mr-2">
                  <svg
                    
                    width={16}
                    height={12}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.3.3L5 9.6 1.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
                      fill="#00C6A7"
                      fillRule="nonzero"
                    />
                  </svg>
                </span>
                <span className=" text-gray-400">Get a callback within 24 hours</span>
              </li>
              <li>
                <span className="inline-block mr-2">
                  <svg
                    width={16}
                    height={12}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.3.3L5 9.6 1.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
                      fill="#00C6A7"
                      fillRule="nonzero"
                    />
                  </svg>
                </span>
                <span className=" text-gray-400">Quick on-boarding</span>
              </li>
              <li>
                <span className="inline-block mr-2">
                  <svg
                    width={16}
                    height={12}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.3.3L5 9.6 1.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
                      fill="#00C6A7"
                      fillRule="nonzero"
                    />
                  </svg>
                </span>
                <span className=" text-gray-400">Dedicated client support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* footer */}
      <section className=" mt-16">
        <Footer />
      </section>
    </main>
  );
};

export default HireDriverForB2b;
