import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="hero-home flex flex-col justify-center items-start max-w-[600px] m-auto min-h-[60vh]">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-semibold text-[#2b2b2b] leading-[3.5rem]">
            TOP TECH STARTUPS <br /> HIRING <br /> 2023
          </h1>
          <hr className="h-6 border-t-[#2d76ff] border-t-8 w-[50%]" />
        </div>
        <div className="flex">
          <p className="italic text-lg">
            "Discover the latest information on top tech startups and their
            hiring activity - stay ahead of the curve with our comprehensive
            database."
          </p>
        </div>
        <div className="flex mt-4">
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
    </>
  );
}
