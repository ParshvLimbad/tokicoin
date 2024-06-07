import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-center">
      <div className="flex flex-row justify-between w-[95%] items-center">
        <div>
          <h1 className="text-[23px]">TokiCoin</h1>
        </div>
        <div>
          <ul className="flex flex-row gap-8">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
