import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-900 flex justify-center flex-col items-center fixed bottom-0 w-full">
         <div className="logo font-extrabold text-xl sm:text-2xl cursor-pointer hover:scale-105 transition-transform duration-200">
              <span className="text-green-400">&lt;</span>
              <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                Password
              </span>
              <span className="text-green-400">Manager/&gt;</span>
            </div>
      <div className="text-white">Created With 💗 By Sahil</div>
    </div>
  );
};

export default Footer;
