import React from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div class="min-w-screen min-h-screen signup  flex items-center justify-center px-5  pt-36 pb-16">
      <div
        class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden z-10"
        style={{ "max-width": "1085px" }}
      >
        <div class="md:flex w-full">
          <div class="hidden md:block w-1/2 bg-brown py-3 px-3">
            <img src="images/blog-img-08.jpg" className="w-full h-full" />
          </div>
          <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div class="text-center mb-5">
              <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>
            <div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-4">
                  <label for="" class="text-xs font-semibold px-1">
                    Your name
                  </label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      class="w-full -ml-10 pl-10 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      style={{ "font-size": "16px" }}
                      placeholder="John"
                    />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-4">
                  <label for="" class="text-xs font-semibold px-1">
                    Your phone
                  </label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="tel"
                      style={{ "font-size": "16px" }}
                      class="w-full -ml-10 pl-10 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="123-456-7890"
                    />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-4">
                  <label for="" class="text-xs font-semibold px-1">
                    Email
                  </label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="email"
                      style={{ "font-size": "16px" }}
                      class="w-full -ml-10 pl-10 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="johnsmith@example.com"
                    />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-4">
                  <label for="" class="text-xs font-semibold px-1">
                    Password
                  </label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="password"
                      style={{ "font-size": "16px" }}
                      class="w-full -ml-10 pl-10 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="************"
                    />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-4">
                  <label for="" class="text-xs font-semibold px-1">
                    Confirm Password
                  </label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="password"
                      style={{ "font-size": "16px" }}
                      class="w-full -ml-10 pl-10 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="************"
                    />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-2">
                  <Link to="/Login-form" className="cursor-pointer">
                    <label
                      for=""
                      class="text-lg font-semibold px-1 cursor-pointer hover:text-orange-400"
                    >
                      Do you have account ?
                    </label>
                  </Link>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-2">
                  <button class="block w-1/2 max-w-xs mx-auto bg-orange-300 hover:bg-brown  text-white rounded-lg px-3 py-3 font-semibold">
                    REGISTER NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
