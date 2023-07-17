import Wash from "../../assets/car_wash_icon.svg";
import Recharge from "../../assets/recharge.svg";
import Driving from "../../assets/prof_driving.svg";

import { Link } from "react-router-dom";

const ServiceCards = () => {
  const services = [
    {
      name: "Professional Drivers",
      description:
        "Hire verified, professional drivers for hassle-free commutes, running errands and safe after-party drops on hourly basis",
      href: "#",
      icon: Driving,
    },
    {
      name: "Car Wash",
      description:
        "Pressure wash, eco wash & daily wash by trained executives equipped with high-grade machines and premium 3M materials",
      href: "#",
      icon: Wash,
    },
    {
      name: "Recharge FASTag",
      description:
        "Zip through the toll-gates on your outstation trips without any worries. Recharge your FASTag in just a few taps",
      href: "#",
      icon: Recharge,
    },
  ];
  return (
    <>
      <div className="pt-16 pb-16 text-center">
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 ">
          {services.map((item) => {
            return (
              <div
                key={item.name}
                className=" hover:scale-[1.05] shadow-2xl border-none rounded-xl overflow-hidden bg-white transition-all"
              >
                <Link className="">
                  <div className="bg-gradient-to-b from-[#c5eaf9] to-[#ffffff] pt-[4.125rem] pb-[3.125rem]">
                    <img
                      className=" w-16 h-16 mx-auto"
                      src={item.icon}
                      alt="alternative"
                    />
                  </div>
                  <div className="px-2 xsm:px-4 pb-[2.125rem]">
                    <h3 className="font-bold mb-[0.375rem]">
                      {item.name}
                    </h3>
                    <h4 className="mb-4 text-slate-400">{item.description}</h4>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServiceCards;
