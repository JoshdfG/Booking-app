"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotCompleted from "/Users/hp/next-transport/src/app/pages/notCompleted";
import Loading from "../pages/loading";
import Completed from "../pages/completed";
const Plane = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1((prevChecked) => !prevChecked);
    setIsLoading1(true);

    if (!isChecked1) {
      setTimeout(() => {
        setIsLoading1(false);
      }, 200);
    }
  };
  const handleCheckboxChange2 = () => {
    setIsChecked2((prevChecked) => !prevChecked);
    setIsLoading2(true);

    if (!isChecked2) {
      setTimeout(() => {
        setIsLoading2(false);
      }, 200);
    }
  };
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined
  ) => {
    setSelectedDate(date);
  };
  const [selectedDate1, setSelectedDate1] = useState<Date | null>(null);

  const handleDateChange1 = (
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined
  ) => {
    setSelectedDate(date);
  };
  return (
    <section className="min-h-[100dvh] cn-element w-[98%] md:w[50%] lg:w-[40%] mx-auto md:h-fit text-white">
      <div>
        <h1>Book flights</h1>
        <article>
          <div className="card w-[90%] bg-gray-200/10 text-center p-6 m-4  mx-auto rounded-2xl text-white/80 ">
            <div>
              <h1 className="font-semibold capitalize text-2xl mb-16 mt-8">
                Reserve your flights & Boarding Today
              </h1>
            </div>
            <form>
              <div className="my-8 space-x-6 ">
                <div className="links-container flex align-middle justify-center">
                  <label htmlFor="check1" className="check-box">
                    <input
                      id="check1"
                      type="checkbox"
                      className="checkbox hidden"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                    />
                    {!isChecked1 ? (
                      <NotCompleted />
                    ) : isLoading1 ? (
                      <Loading />
                    ) : (
                      <Completed />
                    )}
                  </label>
                  <span className="mr-2">Round Trip</span>

                  <label htmlFor="check2" className="check-box">
                    <input
                      id="check2"
                      className="checkbox hidden"
                      checked={isChecked2}
                      onChange={handleCheckboxChange2}
                      type="checkbox"
                    />
                    {!isChecked2 ? (
                      <NotCompleted />
                    ) : isLoading2 ? (
                      <Loading />
                    ) : (
                      <Completed />
                    )}
                  </label>
                  <span className="mr-2">One Way</span>
                </div>
              </div>
              <label htmlFor="" className="">
                <input
                  type="text"
                  required
                  placeholder="Take off location"
                  className="textarea w-[80%] md:w-[90%] p-2 rounded-lg bg-slate-500 mb-10 outline-none text-white"
                />
              </label>
              <label htmlFor="">
                <input
                  type="text"
                  placeholder="Destination"
                  required
                  className="textarea w-[80%] md:w-[90%] p-2 rounded-lg bg-slate-500 mb-8 outline-none text-white"
                />
              </label>
              <div>
                <div className="">
                  <label htmlFor="" className="">
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      className=" w-[80%] md:w-[90%] p-2 rounded-lg bg-slate-500 mb-8 outline-none text-white"
                    />
                  </label>

                  <label htmlFor="">
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className=" w-[80%] md:w-[90%] p-2 rounded-lg bg-slate-500 mb-8 outline-none text-white"
                    />
                  </label>
                </div>
                <div className=" md:flex mx-auto align-middle justify-center">
                  <label htmlFor="">
                    {" "}
                    <div className="mb-3">
                      <p>Pick up date</p>
                    </div>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      placeholderText="Select a date"
                      className=".react-datepicker__month-container textarea  p-2 mr-2 w-[75%] rounded-lg bg-slate-500 mb-8 outline-none text-white"
                    />
                  </label>
                  <label htmlFor="">
                    <div className="mb-3">
                      <p>Return date</p>
                    </div>
                    <DatePicker
                      selected={selectedDate1}
                      onChange={handleDateChange1}
                      placeholderText="Select a date"
                      className=".react-datepicker__month-container textarea p-2 rounded-lg w-[75%] bg-slate-500 mb-8 outline-none text-white"
                    />
                  </label>
                </div>
              </div>
            </form>
            <div className="flex justify-between mx-auto w-[80%]"></div>
            <button className="logo bg-blue-800 w-[80%] p-2  rounded-xl active:bg-blue-950">
              Submit
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Plane;
