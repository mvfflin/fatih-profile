import Image from "next/image";
import React from "react";
import Button1 from "./button";
import myphoto from "../assets/images/me.jpg";

export default function HomeSection() {
  return (
    <section id="home" className="h-screen flex bg-sawah">
      <div className="m-auto">
        <div className="block text-center lg:text-left lg:flex gap-20">
          <div className="text-center justify-center flex">
            <Image
              src={myphoto}
              alt="picture"
              width={300}
              height={300}
              className="text-center rounded-full border-6 border-t-black border-b-white border-l-black border-r-white cursor-pointer hover:scale-110"
            />
          </div>
          <div className="my-auto">
            <h1 className="font-bold text-4xl mt-8 lg:mt-0 font-helvetica">
              Fatihul Ihsan Ramadhan
            </h1>
            <h2 className="font-semibold text-2xl mt-3 font-poppins">
              Junior Fullstack Developer | Small Content Creator
            </h2>
            <div className="mt-3 text-3xl font-motion flex justify-center lg:justify-start">
              <Button1>About me!</Button1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
