// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const DriverTestimonial = () => {
  const driverTestimonial = [
    {
      name: "Flexibility",
      description:
        "Our top Drivers earn up to ₹60,000 a month by spending only up to 8 hours a day on ApnaDriver platform. We offer complete flexibility and you can check-in or out whenever you want.",
    },
    {
      name: "Payment",
      description:
        "Instant live updates of your trip earnings are shown on your ApnaDriver app. Choose from our flexible pay-out options - daily, weekly or monthly payment.",
    },
    {
      name: "Easy Onboarding",
      description:
        "At ApnaDriver, you are assessed, trained and on-boarded into our system, ready to drive people without investing in cars.",
    },
    {
      name: "Incentives",
      description:
        "Make the most of ApnaDriver special incentive schemes that run frequently to increase your earnings.",
    },
    {
      name: "Support",
      description:
        "Searching for a great prototyping and layout design app was difficult but thankfully I found app suite quickly",
    },
    {
      name: "Driver Safety",
      description:
        "We have a 24/7 support team to assist you with any kind of concerns.",
    },
    {
      name: "Referral",
      description:
        "Refer a friend and get paid ₹10 per trip completed by your friend for 30 days. We’ve noticed that Drivers earn up to ₹20,000 a month only via referrals!",
    },
  ];
  return (
    <>
      {/* slider-1 */}
      <div className="">
        {/* container */}
        <div className="px-4 sm:px-8">
          <p className="mb-24 text-center text-3xl font-bold lg:max-w-xl lg:mx-auto">
            What Do Users Think About ApnaDriver
          </p>

          <Swiper
            spaceBetween={50}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination ={{
                clickable: true,
                
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="px-12"
          >
            {driverTestimonial.map((item) => {
              return (
                <SwiperSlide key={item.name}>
                  <div className="py-8">
                    {/* <img
                      className="w-20 h-20 mr-auto mb-5 ml-auto rounded-[50%]"
                      src={item.image}
                    /> */}
                    {/* card-body */}
                    <div className="text-center">
                      <p className="mb-3 text-[#252c38] font-bold text-base">
                        {item.name}
                      </p>
                      <p className="italic">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default DriverTestimonial;
