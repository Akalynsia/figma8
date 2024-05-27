import React from "react";

const App = () => {
  return (
    <div className="relative">
      <div className="flex justify-between items-stretch h-screen w-full">
        <div className="self-end">
          <img src="./Bot-left.png" alt="bot left image" />
        </div>
        <div className="w-[526px] h-[612px] bg-[#FFFFFF] bg-opacity-90 self-center mr-80 rounded-3xl shadow-2xl flex flex-col justify-center">
          <div className="text-[70px] font-[600] text-[rgba(2,185,75,0.84)] ml-10 mb-2 mt-2">
            LOGIN
          </div>
          <form className="flex flex-col gap-6 self-center mb-10">
            <input
              type="text"
              placeholder="Username"
              style={{
                width: "437.7px",
                height: "60.63px",
                border: "solid 1px",
                borderRadius: "10px",
                opacity: "0.31",
                paddingLeft: "20px",
              }}
            />
            <input
              type="text"
              placeholder="Password"
              style={{
                width: "437.7px",
                height: "60.63px",
                border: "solid 1px",
                borderRadius: "10px",
                opacity: "0.31",
                paddingLeft: "20px",
              }}
            />
          </form>
          <button className="w-[233.27px] h-[62.59px] bg-[rgba(2,185,75,0.84)] text-[#FFFFFF] text-opacity-90 text-[25px] font-[600] rounded-xl ml-11 mb-4">
            LOGIN
          </button>
          <div className="w-[438px] flex justify-between mx-auto mt-8 mb-10">
            <div className="w-[195.75px] h-0 border-t border-solid border-black self-center"></div>
            <div className="font-[600] text-[25px] text-[rgba(16,26,28,1)]">
              OR
            </div>
            <div className="w-[195.75px] h-0 border-t border-solid border-black self-center"></div>
          </div>
          <div className="w-[134.36px] h-[30.31px] mx-auto flex justify-between mb-10">
            <img
              src="./Google.png"
              alt="Google icon"
              style={{ width: "28.59px", height: "28.59px" }}
            />
            <img
              src="./Facebook.png"
              alt="Google icon"
              style={{ width: "28.59px", height: "28.59px" }}
            />
          </div>
          <div className="w-[510px] flex justify-between mx-auto">
            <p className="font-[600] text-[20px] text-[rgba(2,185,75,0.75)]">
              Forgot Password
            </p>
            <p className="font-[600] text-[20px] text-[rgba(2,185,75,0.75)]">
              Register
            </p>
          </div>
        </div>
        <div>
          <img src="./Top-right.png" alt="top right image" />
        </div>
      </div>
    </div>
  );
};

export default App;
