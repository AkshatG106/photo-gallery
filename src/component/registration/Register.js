import React from "react";
import bg from "../../assests/images.jpg";
import logo from "../../assests/Logo.png";
// import Lottie from "react-lottie";
// import animationData from "../../lottie/Animation - 1714035586431.json";
const Register = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mr-[400px]">
        <div className="">
          <img src={logo} alt="Logo.png" className="w-[500px] h-[500px] rounded-xl shadow-2xl" />
          {/* <div>
            <Lottie options={defaultOptions} height={400} width={400} />
          </div> */}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="h-[35px] w-[340px] shadow-lg flex mb-4 bg-white rounded-lg">
          <div className="bg-blue-700 w-1 h-full rounded-lg"></div>
          <div className="flex justify-center items-center text-[15px] ml-5">
            Register for this site
          </div>
        </div>
        <div className="shadow-2xl bg-white rounded-lg p-4 w-[340px]">
          <form className="m-3">
            <div className="">
              <div>UserName : </div>
              <input
                type="text"
                className="border h-[40px] rounded-sm mt-2 pl-2 w-full"
              />
            </div>
            <div className="mt-3">
              <div>Email : </div>
              <input
                type="text"
                className="border h-[40px] rounded-sm mt-2 pl-2 w-full"
              />
            </div>
            <div className="mt-3">
              <div>Password : </div>
              <input
                type="text"
                className="border h-[40px] rounded-sm mt-2 pl-2 w-full"
              />
            </div>
            <div className="mt-3">
              <div>Confirm Password : </div>
              <input
                type="text"
                className="border h-[40px] rounded-sm mt-2 pl-2 w-full"
              />
            </div>
            <div className="mt-3 text-[12px]">
              Registration confirmation will be emailed to you
            </div>
            <button className="bg-red-400 w-full rounded-md p-2 text-white mt-6">
              Register
            </button>
          </form>
        </div>
        <div className="mt-5 w-[340px] text-[15px]">
          <div className="flex justify-between text-gray-400">
            <div>
              <button className="">Log in</button>
            </div>
            <div>
              <button className="">Lost your Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
