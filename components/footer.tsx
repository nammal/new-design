"use client";
const Footer = () => {
  return (
    <footer className="bg-[#0C1424] flex item-center justify-center ">
      <div className="container sm:px-14 px-6 py-14 flex item-center justify-center sm:justify-between sm:flex-row flex-col gap-6 sm:gap-0">
        <img
          src="https://xbetagents.com/wp-content/uploads/2024/04/1xbet-logo.png"
          alt=""
          className="h-14 max-w-full"
        />
        <div className="text-white flex flex-col items-center justify-center">
          <ul className="flex sm:gap-5 gap-2 items-center justify-center font-normal sm:text-base text-xs">
            <li>
              <a href="#benifits">Benifits</a>
            </li>
            <li>
              <a href="#conditions">Conditions</a>
            </li>
            <li>
              <a href="#opportunities">Opportunities</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
          <small className="text-xs opacity-60 mt-3 ">
            Copyright © 2007-2025
          </small>
          <small className="text-xs opacity-60 mt-3 ">
            «1xbet Agent». All rights reserved and protected by law.
          </small>
        </div>
        <button
          onClick={() => (window.location.href = "#contacts")}
          className="uppercase text-white bg-[#78A32F] rounded-md px-8 text-base  h-12"
        >
          Become an agent
        </button>
      </div>
    </footer>
  );
};

export default Footer;
