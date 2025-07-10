"use client";

import { useEffect, useState } from "react";

const images = [
  "https://xbetagents.com/wp-content/uploads/2024/04/mb_1920_1000_4.jpg",
  "https://xbetagents.com/wp-content/uploads/2024/04/Untitled-design-2.png",
  "https://xbetagents.com/wp-content/uploads/2024/04/Untitled-design-1.png",
];

const preloadImages = (urls: string[]) => {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};
const HeroBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Preload images on mount
    preloadImages(images);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="sm:h-screen h-full relative isolate transition-all duration-3000 ease-in-out">
      <div
        className="h-[calc(100%_-_6rem)] flex item-center justify-center isolate relative transition-all duration-1000 bg-center bg-cover"
        style={{
          backgroundImage: `url('${images[currentImage]}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container sm:px-14 px-4 z-10 gap-2 flex items-start justify-center flex-col py-24 sm:py-0">
          <p className="text-white font-bold sm:text-6xl text-3xl">
            EARN ONLINE WITH
          </p>
          <p className="text-white font-semibold sm:font-bold sm:text-5xl text-2xl">
            1XBET E-AGENT
          </p>
          <p className="text-white font-normal sm:text-xl">
            Become an e-wallet agent, accept request deposit and withdraw from
            (www.1xbet.com) <br />
            and get a commission.
          </p>
          <button
            onClick={() => (window.location.href = "#contacts")}
            className="uppercase bg-[#78A32F] rounded-md px-8 text-base py-3 text-white mt-5"
          >
            Become an agent
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="sm:absolute flex sm:flex-row flex-col sm:-bottom-5  px-14 items-center justify-between  gap-5  container -mt-14 z-20 sm:mt-0">
          <div className="flex flex-col items-center">
            <img
              src="https://xbetagents.com/wp-content/uploads/2024/03/Picture1.png"
              alt=""
            />
            <p className="text-base font-semibold">Leading brand since 2007</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://xbetagents.com/wp-content/uploads/2024/03/Picture2.png"
              alt=""
            />
            <p className="text-base font-semibold"> More than 50 countries</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://xbetagents.com/wp-content/uploads/2024/03/Picture3.png"
              alt=""
            />
            <p className="text-base font-semibold">
              {" "}
              25000 events / 16000 LIVE
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://xbetagents.com/wp-content/uploads/2024/03/Picture4.png"
              alt=""
            />
            <p className="text-base font-semibold">5500 markets</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
