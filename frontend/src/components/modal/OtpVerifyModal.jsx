import { useState } from "react";
import { Link } from "react-router-dom";
import Lock from "../../assets/lock_key.svg";
import HiringDriverSignupModal from "./HiringDriverSignupModal";

export default function OtpVerifyModal({
  showModal2,
  actualOtp,
  setShowModal2,
  setShowModal,
}) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [showModal3, setShowModal3] = useState(false);

  const verify = (e) => {
    e.preventDefault();
    if (otp != actualOtp) {
      setError("Otp Verification Failed");
      setTimeout(() => setError(""), 3000);
    } else {
      setShowModal2(false);
      setShowModal3(true);
    }
    setOtp("");
  };

  const handle = (event) => {
    setOtp(event.target.value);
    // console.log("OTP" + event.target.value);
  };
  const handleModal = () => {
    setShowModal(true);
    setShowModal2(false);
    // console.log("OTP" + event.target.value);
  };

  return (
    <>
      {showModal2 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg lg:py-16 lg:px-3 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {/* <div className="absolute top-3 right-6">
                  <button
                    className="ml-auto"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="h-6 w-6 text-2xl block outline-none focus:outline-none">
                      &#10006;
                    </span>
                  </button>
                </div> */}
                {/*body*/}
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-12 md:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img src={Lock} className="mx-auto h-10 w-auto" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Please verify your phone number
                    </h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={verify}>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Enter your OTP number
                        </label>
                        <div className="mt-2">
                          <input
                            id="otp"
                            name="otp"
                            type="tel"
                            pattern="[0-9]{6}"
                            autoComplete="phone"
                            required
                            placeholder="Enter 6-Digit OTP"
                            onChange={handle}
                            value={otp}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <button className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          Verify OTP
                        </button>
                        <Link onClick={handleModal}>
                          <p className=" text-gray-400 underline text-base text-center pt-5">
                            Change your mobile number
                          </p>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                {/*footer*/}
                <p className=" font-bold text-center text-base uppercase text-red-500">
                  {error}
                </p>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <HiringDriverSignupModal
        showModal3={showModal3}
        setShowModal3={setShowModal3}
        setShowModal2={setShowModal2}
      />
    </>
  );
}

// export default BookingDriver;
