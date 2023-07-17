import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/apna_driver_logo.png";
import { ImMobile } from "react-icons/im";
import OtpVerifyModal from "./OtpVerifyModal";

export default function BookingDriver({ showModal, setShowModal }) {
  const [showModal2, setShowModal2] = useState(false);
  const [phone, setPhone] = useState("");
  // Working using api
  const [val, setVal] = useState("");
  

  const randomNumber = (e) => {
      e.preventDefault();
      let val = Math.floor(100000 + Math.random() * 900000);
      console.log(val);
      setVal(val);
      setShowModal(false);
      setShowModal2(true);
      setPhone('');
  };
  const handle = (e)=>{
    setPhone(e.target.value);
  }

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg lg:py-16 lg:px-3 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="absolute top-3 right-6">
                  <button
                    className="ml-auto"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="h-6 w-6 text-2xl block outline-none focus:outline-none">
                      &#10006;
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-12 md:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <ImMobile className="mx-auto h-10 w-auto" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Please enter your phone number
                    </h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={randomNumber}>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Phone Number
                        </label>
                        <div className="mt-2">
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            pattern="[0-9]{10}"
                            autoComplete="phone"
                            required
                            placeholder="Enter Phone Number"
                            onChange={handle}
                            value={phone}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        {/* <Link onClick={randomNumber}> */}
                        <button
                          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Continue
                        </button>
                        {/* </Link> */}
                      </div>
                    </form>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <OtpVerifyModal
        showModal2={showModal2}
        actualOtp={val}
        setShowModal2={setShowModal2}
        setShowModal={setShowModal}
      />
    </>
  );
}

// export default BookingDriver;
