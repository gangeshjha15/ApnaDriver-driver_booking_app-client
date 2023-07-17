// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



const Testimonial = ({testimonial, text}) => {

  
  return (
    <>
      {/* slider-1 */}
      <div className="">
        {/* container */}
        <div className="xsm:px-4 sm:px-6">
          <h1 className="mb-16 text-center font-bold lg:mx-auto">
            {text}
          </h1>

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
          >
            {testimonial.map((item) => {
              return (
                <SwiperSlide key={item.name} >
                  <div className="container mx-auto pb-8">
                    <img
                      className="w-20 h-20 mx-auto mb-5 rounded-[50%]"
                      src={item.image}
                    />
                    {/* card-body */}
                    <div className="text-center">
                      <h4 className="italic mb-3">{item.description}</h4>
                      <h3 className="mb-0 text-[#252c38] font-bold">
                        {item.name}
                      </h3>
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

export default Testimonial;
