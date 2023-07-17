import { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../../assets/profile-signup.svg";

export default function HiringDriverSignupModal({
  showModal3,
  setShowModal3
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const verify = (e) => {
    e.preventDefault();
    setShowModal3(false);
    // console.log(name + " " + email);
    setName('');
    setEmail('');
  };

  const handleName = (event) => {
    setName(event.target.value);
    // console.log("OTP" + event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    // console.log("OTP" + event.target.value);
  };

  return (
    <>
      {showModal3 ? (
        <>
          <div className=" overflow-y-hidden justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
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
                    <img src={Profile} className="mx-auto h-10 w-auto" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Please enter your name and email
                    </h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={verify}>
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Enter your name
                        </label>
                        <div className="mt-2">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="phone"
                            required
                            placeholder="Enter Name"
                            onChange={handleName}
                            value={name}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Enter your email
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="phone"
                            required
                            placeholder="Enter Email-ID"
                            onChange={handleEmail}
                            value={email}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        {/* <Link to={"/"} onClick={verify}> */}
                        <button className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          Signup
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
    </>
  );
}

// export default BookingDriver;
