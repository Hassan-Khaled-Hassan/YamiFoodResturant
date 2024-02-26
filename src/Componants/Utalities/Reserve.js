import React, { useState } from "react";
import Head from "./Head";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reserve = () => {
  const [startDate, setStartDate] = useState(new Date());
  const onTimeChange = (o) => {
    console.log(o);
  };
  return (
    <form>
      <div className="space-y-12">
        <div className=" py-20 containeer mx-auto">
          <Head head="Reserve a table" par="Fill out your information" />

          <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-6 px-2">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-lg leading-6 font-semibold"
              >
                Book a table
              </label>
              <div className="mt-2">
                <DatePicker
                  className="block w-full rounded-md border-4 outline-none p-5 placeholder:text-lg focus-visible:border-4  focus:border-brown sm:text-sm sm:leading-6 "
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  isClearable
                  placeholderText="Set your date !"
                  calendarClassName="rasta-stripes"
                />
              </div>
              <div className="mt-2">
                <DatePicker
                  className="block w-full rounded-md border-4 outline-none p-5 placeholder:text-lg focus-visible:border-4  focus:border-brown sm:text-sm sm:leading-6 "
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  isClearable
                  placeholderText="Set your date !"
                  calendarClassName="rasta-stripes"
                />
              </div>
              <div className="mt-4">
                <select
                  id="persons"
                  name="persons"
                  autoComplete="country-name"
                  className="select block w-full rounded-md border-4 outline-none p-5 focus-visible:border-4  focus:border-brown sm:text-sm sm:leading-6 md:text-lg text-gray-400"
                >
                  <option disabled selected>
                    Select Person*
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-lg leading-6 font-semibold"
              >
                Contact Details
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="Your Name"
                  id="last-name"
                  placeholder="Your Name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-4 outline-none p-5 placeholder:text-lg focus-visible:border-4  focus:border-brown sm:text-sm sm:leading-6 "
                />
              </div>
              <div className="mt-3">
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="your-Email"
                  autoComplete="email"
                  className="block w-full rounded-md border-4 outline-none p-5 placeholder:text-lg focus-visible:border-4  focus:border-brown sm:text-sm sm:leading-6 "
                />
              </div>
              <div className="mt-3">
                <input
                  type="tel"
                  name="Email"
                  id="phone"
                  placeholder="phone   123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  autoComplete="mobile-number"
                  className="block w-full rounded-md border-4 outline-none p-5 placeholder:text-lg focus-visible:border-4  focus:border-brown sm:text-sm sm:leading-6 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="rounded-md border-2 border-third bg-transparent px-12 py-5 text-sm font-semibold text-third hover:text-white shadow-sm hover:bg-third duration-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Book Table
        </button>
      </div>
    </form>
  );
};

export default Reserve;
