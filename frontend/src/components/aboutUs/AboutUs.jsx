import Footer from "../footer/Footer";
import GangeshImage from "../../assets/stamp_photo_96.png";
import UserAvatar from "../../assets/user-avatar.svg";
import Team from "../../assets/team.svg";



function AboutUs() {
  return (
    <>
      <section>
        <div className="w-[56%] mt-[4.5%] mx-auto mb-auto flex-col">
          <div className="w-[100%] font-bold text-[37px] leading-[58px] text-center text-[#09081a]">
            We Simplify Car Ownership
          </div>
          <div className="mt-[2.25%] text-gray-500 text-[17px] text-center font-medium leading-[150%] ">
            Over 7 years, ApnaDriver has revolutionized the way consumers hire
            drivers for their private cars, and how businesses maintain a
            strong, reliable supply chain of professional drivers to transport
            vehicles. We have acquired over 650,000+ customers, 150+ businesses,
            that are served by 50,000+ background verified, uniformed
            professional drivers, and have completed 5M+ Million trips.
          </div>
          <div className="w-[100%] mt-[7%] h-auto ">
            <img
              src={Team}
              alt="ApnaDriver Team"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="mt-[7%] opacity-30 text-[17px] text-center font-medium leading-[150%]">
            In 2021, we launched India’s first Car Ownership Super App that
            allows users to book any service around car ownership such as
            general maintenance, roadside assistance, car cleaning, and much
            much more! What’s the big deal? Many services are infrequent and
            there’s no real use for a “cashback” on something you book once a
            year. Well, now car owners can gain reward coins that can be
            immediately redeemed for exclusive partner offers, discounts, or
            products!
          </div>
        </div>
      </section>

      <section>
        <div className="w-[80%] mt-[148px] mx-auto mb-auto ">
          <div className="w-[100%] font-bold text-[37px] leading-[52px] text-center text-[#09081a]">
            Leadership
          </div>
          <div className="mt-[80px] grid items-center justify-center grid-cols-3 gap-x-[60px] gap-y-[82px]">
            <div className="w-[100%] flex-col justify-center items-center gap-2">
              <div>
                <img
                  src={GangeshImage}
                  alt="Gangesh Jha"
                  className=" w-[40%] h-[40%] mx-auto rounded-2xl"
                />
              </div>
              <div className=" text-[17px] text-center text-[#09081a] font-bold leading-[30px] ">
                Gangesh Jha
              </div>
              <div className="text-[17px] text-center text-[#009d61] font-medium leading-[150%]">
                Executive Chairman and CFO
              </div>
              <div className="mt-[2%]">
                <a
                  href="https://www.linkedin.com/in/gangesh-jha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[100%] mx-auto"
                >
                  <img
                    src="https://ik.imagekit.io/driveu/Web/linkedin_jDwoKZiNj.png"
                    className=" w-[10%] mx-auto"
                    alt="Gangesh"
                  />
                </a>
              </div>
            </div>
            <div className="w-[100%] flex-col justify-center items-center gap-2">
              <div>
                <img
                  src={UserAvatar}
                  alt="Pradeep Chaudhary"
                  className=" w-[40%] h-[40%] mx-auto rounded-2xl"
                />
              </div>
              <div className=" text-[17px] text-center text-[#09081a] font-bold leading-[30px] ">
              Pradeep Chaudhary
              </div>
              <div className="text-[17px] text-center text-[#009d61] font-medium leading-[150%]">
                CEO & Co-Founder
              </div>
              <div className="mt-[2%]">
                <a
                  href="https://www.linkedin.com/in/gangesh-jha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[100%] mx-auto"
                >
                  <img
                    src="https://ik.imagekit.io/driveu/Web/linkedin_jDwoKZiNj.png"
                    className=" w-[10%] mx-auto"
                    alt="Gangesh"
                  />
                </a>
              </div>
            </div>
            <div className="w-[100%] flex-col justify-center items-center gap-2">
              <div>
                <img
                  src={UserAvatar}
                  alt=""
                  className=" w-[40%] h-[40%] mx-auto rounded-2xl"
                />
              </div>
              <div className=" text-[17px] text-center text-[#09081a] font-bold leading-[30px] ">
                Rohit Shaw
              </div>
              <div className="text-[17px] text-center text-[#009d61] font-medium leading-[150%]">
                Director
              </div>
              <div className="mt-[2%]">
                <a
                  href="https://www.linkedin.com/in/gangesh-jha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[100%] mx-auto"
                >
                  <img
                    src="https://ik.imagekit.io/driveu/Web/linkedin_jDwoKZiNj.png"
                    className=" w-[10%] mx-auto"
                    alt="Gangesh"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[90%] sm:w-[80%] lg:w-[50%]  mx-auto mb-auto mt-32">
        <div className=" grid items-center justify-center gap-x-10 gap-y-10 grid-cols-2">
          <div className="w-[100%]">
            <div className=" font-bold text-[24px] leading-[150%] text-center text-[#09081a] ">50K+</div>
            <div className=" font-medium text-[17px] leading-[150%] text-center opacity-30">
              Well-trained &amp; professional Driver Partners
            </div>
          </div>
          <div className="w-[100%]">
            <div className="font-bold text-[24px] leading-[150%] text-center text-[#09081a]">5M+</div>
            <div className="font-medium text-[17px] leading-[150%] text-center opacity-30">
              Drives completed by professional drivers
            </div>
          </div>
          <div className="OurNetworkTextContent">
            <div className="font-bold text-[24px] leading-[150%] text-center text-[#09081a]">650K+</div>
            <div className="font-medium text-[17px] leading-[150%] text-center opacity-30">
              Car owners served on ApnaDriver apps and website
            </div>
          </div>
          <div className="OurNetworkTextContent">
            <div className="font-bold text-[24px] leading-[150%] text-center text-[#09081a]">10+</div>
            <div className="font-medium text-[17px] leading-[150%] text-center opacity-30">
              Major Indian cities covered by ApnaDriver driver services
            </div>
          </div>
          <div className="OurNetworkTextContent">
            <div className="font-bold text-[24px] leading-[150%] text-center text-[#09081a]">7+</div>
            <div className="font-medium text-[17px] leading-[150%] text-center opacity-30">
              Years of Simplifying Car Ownership
            </div>
          </div>
          <div className="OurNetworkTextContent">
            <div className="font-bold text-[24px] leading-[150%] text-center text-[#09081a]">Millions</div>
            <div className="font-medium text-[17px] leading-[150%] text-center opacity-30">
              Lives saved by encouraging safe after-party drops
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}

export default AboutUs;
