import Repairing from "../../assets/car_repair.svg";
import CarWashing from "../../assets/car_wash.svg";
import Insurence from "../../assets/car_insurence.svg";

const ServiceDetails = () => {
  return (
    <>
      {/* details 1 */}
      <div className="py-16 lg:pt-16 text-center lg:text-left">
        <div className="px-4 sm:px-8 lg:flex">
          {/* <div className="lg:col-span-5"> */}
          <div className="lg:flex-1 ">
            <div className="mb-16 lg:mb-0 xl:mt-16 lg:pr-28">
              <h2 className="font-bold mb-6">Doorstep Wash & Deep Cleaning</h2>
              <h3 className="mb-12 text-slate-500">
                ApnaDriver brings on-demand car cleaning to your doorstep with
                satisfaction guarantee. Now available in Bengaluru, Hyderabad
                and Gurgaon, Kolkata coming soon to other cities
              </h3>
              <button
                className="inline-block border py-[1.375rem] px-[2.25rem] border-[#8C53FF] rounded-[32px] bg-[#8C53FF] text-white font-semibold text-[0.875rem] leading-none transition-all
                hover:border-[#8C53FF] hover:border hover:bg-transparent hover:text-[#8C53FF]"
              >
                Book Now
              </button>
            </div>
          </div>
          {/* <div className="lg:col-span-7">
            <div className="xl:ml-14"> */}
          <img
            className="inline max-h-[28rem] max-w-md lg:items-start lg:flex-1"
            src={CarWashing}
            alt="alternative"
          />
          {/* </div>
          </div> */}
        </div>
      </div>
      {/* details 2 */}
      <div className="py-16 text-center lg:text-left">
        <div className="px-4 sm:px-8 lg:flex">
          {/* <div className="lg:col-span-7"> */}
          {/* <div className="mb-12 lg:mb-0 xl:mr-14"> */}
          <img
            className="inline max-h-[28rem] lg:items-start lg:flex-1"
            src={Repairing}
            alt="alternative"
          />
          {/* </div> */}
          {/* </div> */}
          {/* <div className="lg:col-span-5 lg:pt-12"> */}
          <div className="lg:flex-1 ">
            <div className="xl:mt-12 lg:pl-28">
              <h2 className="font-bold mb-6">Car Maintenance & Care</h2>
              <h3 className="mb-12 text-slate-500">
                Discover and book the best car services and maintenance options
                near you. Seamless booking experience and secure online
                payments.
              </h3>
              <button
                className=" inline-block border py-[1.375rem] px-[2.25rem] border-[#F9BA5B] rounded-[32px] bg-[#F9BA5B] text-white font-semibold text-[0.875rem] leading-none transition-all
                hover:border-[#F9BA5B] hover:border hover:bg-transparent hover:text-[#F9BA5B]"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* details 3 */}
      <div className="py-16 text-center lg:text-left">
        {/* <div className="px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12"> */}
        <div className="px-4 sm:px-8 lg:flex">
          {/* <div className="lg:col-span-5"> */}
          <div className="lg:flex-1">
            <div className="mb-16 lg:mb-0 xl:mt-16 lg:pr-28">
              <h2 className="mb-6 font-bold">
                Car Insurance Renewals with Benefits
              </h2>
              <h3 className="mb-12 text-slate-500">
                Your insurance renewals will never be the same again. Reap
                immediate benefits on your motor insurance renewals with DriveU
                benefits with rewards worth up to ₹2,000.
              </h3>
              <button
                className=" inline-block border py-[1.375rem] px-[2.25rem] border-[#4FD939] rounded-[32px] bg-[#4FD939] text-white font-semibold text-[0.875rem] leading-none transition-all
                hover:border-[#4FD939] hover:border hover:bg-transparent hover:text-[#4FD939]"
              >
                Book Now
              </button>
            </div>
          </div>
          {/* <div className="lg:col-span-7 "> */}
          {/* <div className=" "> */}
          {/* <div className="ml-14 lg:ml-20"> */}
          <img
            className="inline max-h-[28rem] lg:items-end lg:flex-1"
            src={Insurence}
            alt="alternative"
          />
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
