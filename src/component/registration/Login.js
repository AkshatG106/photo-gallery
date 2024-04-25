import React from "react";

const Login = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 mt-[100px]">
        <div className="text-[50px] flex justify-center items-center text-blue-500">Photo Gallery</div>
        <div className="text-[50px] flex justify-center items-center text-blue-700 mt-[50px] mb-[25px]">Login</div>
        <div className="flex justify-center items-center w-auto px-[200px] h-auto">
          <form>
            <input
              name="email"
              placeholder="Enter Your Email"
              type="email"
              className="border h-[40px] rounded-sm pl-2 w-full"
            />
            <input
              name="password"
              placeholder="Enter Your Password"
              type="password"
              className="border h-[40px] rounded-sm mt-8 pl-2 w-full"
            />
            <div className="text-blue-600 mt-3 flex justify-end">Forget Password ?</div>
            <button className="bg-blue-400 w-full p-2 text-white text-[20px] rounded-md mt-[40px]">Login</button>
            <div className="mt-6 flex justify-center">New Member ? <span className="text-blue-600">&nbsp;Register Now</span></div>
          </form>
        </div>
      </div>
      <div className="w-1/2 relative">
        <div
          className="bg-blue-700 w-full h-full z-40 absolute"
          style={{ clipPath: "polygon(66% 0, 100% 0, 100% 50%, 100% 100%, 65% 100%, 0 49%)" }}
        ></div>
        <div
          className="bg-blue-500 w-full h-full z-20 absolute"
          style={{ clipPath: "polygon(66% 0, 100% 0, 100% 50%, 100% 99%, 65% 100%, 4% 93%)" }}
        ></div>
        <div
          className="bg-blue-300 w-full h-full z-0 absolute"
          style={{ clipPath: "polygon(66% 0, 100% 0, 100% 50%, 100% 99%, 65% 100%, 12% 8%)" }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
