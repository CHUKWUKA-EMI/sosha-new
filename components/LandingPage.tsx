/* eslint-disable @next/next/no-img-element */
import React from "react";
import SocialLogin from "./SocialLogin";

let arr: number[] = [];
arr.length = 40;
arr = Array.from(arr);

const LandingPage = () => {
  return (
    <div className="w-full sm:w-[50%] mx-auto h-full flex flex-col justify-center items-center py-10 bg-white dark:bg-black">
      <div className="w-full flex items-center justify-center">
        <div className="w-28">
          <img
            loading="lazy"
            className="w-full h-full"
            src="/Logo.png"
            alt="Logo"
          />
        </div>
      </div>
      <p className="text-center pt-10 text-4xl font-extrabold dark:text-white text-gray-600">
        Welcome to Sosha
      </p>
      <p className="pt-10 text-center text-2xl font-extrabold dark:text-white text-gray-600">
        Join Sosha now.
      </p>
      <div className="w-full sm:w-[50%] pt-10">
        <SocialLogin />
        <div className="w-full mt-3 mb-3 flex items-center gap-2 dark:text-white text-gray-700">
          <div className="h-[1px] dark:bg-gray-500 bg-gray-700 w-full" />
          or
          <div className="h-[1px] dark:bg-gray-500 bg-gray-700 w-full" />
        </div>
        <button className="btn-primary flex flex-auto justify-center items-center rounded-full font-medium w-full">
          Sign up with email
        </button>
      </div>
      <p className="mt-4 text-center sm:text-start text-base font-extrabold dark:text-white text-gray-600">
        Already have an account?
      </p>
      <button className="btn-secondary mt-2 rounded-full font-medium w-[50%]">
        Sign in
      </button>
    </div>
  );
};

export default LandingPage;
