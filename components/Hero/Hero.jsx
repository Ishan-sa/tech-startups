import Link from "next/link";
import React from "react";
import Lottie from "lottie-react";

export default function Hero({ onScrollClick = () => {} }) {
  return (
    <>
      <div className="flex px-8 flex-col">
        <div className="hero-top">
          <div className="hero-home flex flex-col justify-center items-start max-w-[600px] m-auto min-h-[60vh]">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-semibold text-[#2b2b2b] leading-[3.5rem]">
                TOP TECH STARTUPS <br /> HIRING <br /> 2023
              </h1>
              <hr className="h-6 border-t-[#2d76ff] border-t-8 w-[50%]" />
            </div>
            <div className="flex">
              <p className="italic text-lg" id="iphone-test-para">
                "Discover the latest information on top tech startups and their
                hiring activity - stay ahead of the curve with our comprehensive
                database."
              </p>
            </div>
            <div className="flex mt-4" id="test-div-ipad">
              <p className="text-[#7e7e7e] italic">
                Source of data:{" "}
                <Link
                  href="https://www.kaggle.com/datasets/chickooo/top-tech-startups-hiring-2023"
                  target="_blank"
                  className="text-[#2d76ff] font-semibold"
                >
                  Kaggle
                </Link>
              </p>
            </div>
          </div>
          <div className="flex">
            <Lottie
              animationData={require("../../public/lottie-files/tech1.json")}
              style={{
                width: 500,
                height: 500,
              }}
            />
          </div>
        </div>
        <div className="flex justify-center items-center z-[99]">
          <Lottie
            animationData={require("../../public/lottie-files/scroll-down.json")}
            style={{
              width: 300,
              height: 300,
            }}
            onClick={onScrollClick}
          />
        </div>
      </div>
    </>
  );
}
