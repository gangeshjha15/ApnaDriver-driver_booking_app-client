import Cap from "../../assets/hat.svg";
import Steering from "../../assets/steering.svg";
import ThumbUp from "../../assets/thumbUp.svg";

import { Link } from "react-router-dom";

const DriverCards = () => {
  const drivers = [
    {
      name: "5M+",
      description: "Comfortable Drives",
      href: "#",
      icon: Steering,
    },
    {
      name: "50K+",
      description: "Trusted Drivers",
      href: "#",
      icon: Cap,
    },
    {
      name: "650K+",
      description: "Happy Customers",
      href: "#",
      icon: ThumbUp,
    },
  ];
  return (
    <div className="container my-12 mx-auto px-4 ">
        <div className="flex-row sm:flex justify-between  space-x-0 space-y-12 sm:space-x-16 sm:space-y-0">
          {drivers.map((item) => {
            return (
              <div
                key={item.name}
                className="basis-2/3 bg-gradient-to-b from-[#c5eaf9] to-[#ffffff]  shadow-2xl px-2 pt-6 pb-3 border-none rounded-2xl  transition-all hover:scale-[1.04]"
              >
                <div className="sm:px-5">
                  <div className="">
                    <h5 className=" text-xl font-bold mb-[0.375rem]">
                      {item.name}
                    </h5>
                    <p className="mb-4 text-slate-400">{item.description}</p>
                  </div>
                  <img
                    className="w-14 h-14 ml-auto"
                    src={item.icon}
                    alt="alternative"
                  />
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default DriverCards;
