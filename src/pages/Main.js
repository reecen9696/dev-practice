import React from "react";
import User from "../assets/user.jpeg";

const Main = () => {
  return (
    <div>
      <section className="introduction lg:flex lg:flex-row lg:py-20 lg:justify-between items-center mb-32">
        <div className="lg:w-1/2 ">
          <img
            className="h-10 w-10 rounded-full mb-4 mt-8"
            src={User}
            alt="user picture"
          />
          <h1 className="text-4xl mb-8 lg:text-7xl lg:leading-tight">
            Hello! <br />
            I'm Reece Nimo
          </h1>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-3xl mb-4 lg:text-5xl lg:leading-tight">
            A website designer based out of Melbourne, Australia.
          </h2>
          <h3 className="mb-8">
            passionate about creating great websites and products
          </h3>

          <div className="flex space-x-4 mb-8">
            <button className="bg-black text-white w-40 h-12 rounded-lg">
              talk with me
            </button>
            <button className="border border-gray-200 w-40 h-12 rounded-lg">
              see my work
            </button>
          </div>
        </div>
      </section>
      <div className="bg-gray-200 w-screen h-120 -mx-4 lg:-mx-32 p-4 md:p-32 lg:flex lg:items-start space-y-4 lg:space-y-0">
        <div className="lg:w-1/2 flex flex-col self-start space-y-4 lg:mr-32">
          <h2 className="text-3xl mb-4 ">Work experience</h2>
          <div className="flex items-start space-x-4 border-b border-black pb-4">
            <div className="bg-white h-10 w-10 rounded-md flex items-center justify-center">
              <img className="h-6 w-6" src={User} alt="" />
            </div>
            <div>
              <p className="text-sm">Product designer at Uber</p>
              <p className="text-sm">February 2018 - February 2020</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 border-b border-black pb-4">
            <div className="bg-white h-10 w-10 rounded-md flex items-center justify-center">
              <img className="h-6 w-6" src={User} alt="" />
            </div>
            <div>
              <p className="text-sm">Product designer at Uber</p>
              <p className="text-sm">February 2018 - February 2020</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col self-start space-y-4">
          <h2 className="text-3xl mb-4">Awards and recognition</h2>
          <div className="flex items-start space-x-4 border-b border-black pb-4">
            <div className="bg-white h-10 w-10 rounded-md flex items-center justify-center">
              <img className="h-6 w-6" src={User} alt="" />
            </div>
            <div>
              <p className="text-sm">Product designer at Uber</p>
              <p className="text-sm">February 2018 - February 2020</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 border-b border-black pb-4">
            <div className="bg-white h-10 w-10 rounded-md flex items-center justify-center">
              <img className="h-6 w-6" src={User} alt="" />
            </div>
            <div>
              <p className="text-sm">Product designer at Uber</p>
              <p className="text-sm">February 2018 - February 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
