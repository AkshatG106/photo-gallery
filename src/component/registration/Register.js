import React from "react";
import bg from "../../assests/images.jpg";
import logo from "../../assests/NewLogo.png";

const Register = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mr-[200px]">
        <div className="">
          <img
            src={logo}
            alt="Logo.png"
            className="w-[500px] h-[560px] rounded-xl shadow-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col bg-white shadow-2xl rounded-lg">
        <div className="flex justify-center items-center h-[35px] w-[340px] rounded-t-lg pt-3">
          <div className="flex justify-center items-center text-[20px]">
            Register for this site
          </div>
        </div>
        <div className="rounded-b-lg p-4 w-[340px]">
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
            <div className="mt-3 ml-1 text-[12px] text-gray-400">
              Registration confirmation will be emailed to you
            </div>
            <button className="bg-red-400 w-full rounded-md p-2 text-white mt-6">
              Register
            </button>
          </form>
          <div className="mt-3 mx-2 text-[15px] rounded-lg">
            <div className="flex justify-between text-blue-500">
              <div className="p-2 rounded-lg bg-white">
                <button className="">Log in</button>
              </div>
              <div className="p-2 rounded-lg bg-white">
                <button className="">Lost your Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
