import Driver from "../../assets/driver.svg";
import DriverCards from "../cards/DriverCards";
import Footer from "../footer/Footer";
import DriverTestimonial from "../testimonial/DriverTestimonial";
import Testimonial from "../testimonial/Testimonial";

const JoinAsDriver = () => {
  return (
    <>
      <main className="">
        <header className=" 2xl:px-56 xl:px-28 lg:px-14 md:px-7 sm:px-3 pt-16 lg:pt-0 text-center lg:text-left ">
          <div className="px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="mb-20 lg:mt-32 xl:mt-40 xl:mr-6 xl:ml-6">
              <div className="text-[#127E40] font-semibold text-md">
                Looking for a Driver Job?
              </div>
              <div className="font-sans text-4xl leading-normal font-black mt-7 uppercase">
                Earn up to ₹60,000 per month by driving cars
              </div>
              <div className=" text-slate-500 mt-10 text-md p-large mb-10">
                Work flexibly with zero investment. Own Car is not required,
                easy onboarding and daily payouts!
              </div>
              <form action="">
                <div className="grid md:grid-cols-3 gap-5">
                  <div className="md:col-span-2">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      pattern="[0-9]{10}"
                      autoComplete="phone"
                      required
                      placeholder="Enter Phone Number"
                      className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="bg-[#000] h-full rounded-md border-[1px] px-4 py-2 border-[#000] text-white  hover:bg-transparent hover:text-[#000] hover:transition-colors hover:duration-300 text-sm"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="items-center flex">
              <img className="max-h-max" src={Driver} alt="" />
            </div>
          </div>
        </header>

        <section className="">
          <DriverCards />
        </section>

        <section className="">
          <div className="text-center px-6 sm:mx-36">
            <div className="mt-20 mb-10 text-3xl font-bold">
              Become a Driver Partner
            </div>
            <div className=" text-gray-400">
              DriveU is India's most popular on-demand private driver service
              provider. You can now become a driving partner on our platform and
              earn by driving our customers around in their own cars. We offer
              our services in and around Bangalore, Mysore, Hyderabad, Mumbai,
              Pune, Delhi NCR, Jaipur, Kanpur, Ahmedabad, Chennai, Coimbatore,
              Kochi, Palakkad, Thrissur, Kozhikode, Trivandrum & Kolkata.
            </div>
          </div>
        </section>

        <section className="mt-32 mb-16">
          <DriverTestimonial />
        </section>
      </main>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default JoinAsDriver;
