import Coins from "../../assets/coins.svg";
import Discount from "../../assets/discount-tag.svg";
import BurnFlame from "../../assets/burn-flame.svg";
import Rupees from "../../assets/rupee.svg";
import Tickets from "../../assets/tickets.svg";

function DriverCoins() {
  return (
    <>
      <header className=" 2xl:px-56 xl:px-28 lg:px-14 md:px-7 sm:px-3 pt-16 lg:pt-0 text-center lg:text-left ">
        <div className="px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="mb-20 lg:mt-32 xl:mt-40 xl:mr-6 xl:ml-6">
            <h3 className="text-[#127E40] font-semibold">ApnaDriver Coins</h3>
            <h1 className="font-sans leading-normal font-black mt-7 uppercase">
              Get rewarded on all your transactions!
            </h1>
            <h4 className=" text-slate-500 mt-10 p-large mb-10">
              Rewarding Car Ownership
            </h4>
            <div className="">
              <button className="bg-[#F9BA5B] border-[1px] border-[#F9BA5B] text-white px-8 py-8 pt-4 pb-4 hover:bg-transparent hover:text-[#F9BA5B] hover:transition-colors hover:duration-300 text-md">
                Redeem Coins
              </button>
            </div>
          </div>
          <div className="items-center flex">
            {/* <img className="max-h-max" src={OrderRide} alt="" /> */}
            <img className=" max-h-full mx-auto" src={Coins} alt="" />
            {/* <img className="max-h-max" src={Navigator} alt="" /> */}
          </div>
        </div>
      </header>

      <section className="px-[24px] pt-[40px] pb-[30px]">
        <div className=" h-auto p-[5px] w-[73%] mx-auto mt-[80px] ">
          <div className=" text-center mx-auto xl:mx-[140px]">
            <h1 className=" font-bold mb-6">Swipe Right to ApnaDriver Coins</h1>
            <h3 className=" text-gray-500 xsm:px-[34px] sm:px-[56px] md:px-[72px]">
              ApnaDriver Coins are the rewards a customer earns when transacting
              on the DriveU app and website on all services.
            </h3>
          </div>

          <div className=" flex flex-row mt-[60px] justify-between">
            <div className="flex-col items-center h-[254px] w-[151px] text-center">
              <div className=" rounded-full bg-[#EFF8F3] mb-4 h-[125px] w-[125px] overflow-hidden mx-auto">
                <img src={Rupees} alt="Pradeep Chaudhary" className="h-[65px] w-[65px] mx-auto mt-8"/>
              </div>
              <div className=" text-[17px] text-[#09081a] font-bold leading-[30px] ">
                Earn coins on transactions
              </div>
            </div>

            <div className="flex-col items-center h-[254px] w-[151px] text-center">
              <div className=" rounded-full bg-[#EFF8F3] mb-4 h-[125px] w-[125px] overflow-hidden mx-auto">
                <img src={BurnFlame} alt="Pradeep Chaudhary" className="h-[65px] w-[65px] mx-auto mt-8"/>
              </div>
              <div className=" text-[17px] text-[#09081a] font-bold leading-[30px] ">
                Burn coins to claim offers
              </div>
            </div>

            <div className="flex-col items-center h-[254px] w-[151px] text-center">
              <div className=" rounded-full bg-[#EFF8F3] mb-4 h-[125px] w-[125px] overflow-hidden mx-auto">
                <img src={Discount} className="h-[65px] w-[65px] mx-auto mt-8"/>
              </div>
              <div className=" text-[17px] text-[#09081a] font-bold leading-[30px] ">
                Redeem exciting offers
              </div>
            </div>

            <div className="flex-col items-center h-[254px] w-[151px] text-center">
              <div className=" rounded-full bg-[#EFF8F3] mb-4 h-[125px] w-[125px] overflow-hidden mx-auto">
                <img src={Tickets} className="h-[65px] w-[65px] mx-auto mt-8"/>
              </div>
              <div className=" text-[17px] text-[#09081a] font-bold leading-[30px] ">
                Buy raffle tickets & win a prize
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DriverCoins;
