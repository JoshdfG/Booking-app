"use client";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import NotCompleted from "../pages/NotCompleted";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../pages/Loading";
import Completed from "../pages/Completed";
import StatePicker from '../StatePicker';


const Bus: React.FC = () => {

  //take off state to control the selected state
  const [takeOff, setTakeOffState] = useState<string>('');
  //take off function to control the selected value
  const takeOffStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTakeOffState(e.target.value);
  };

  const [destinationState1, setDestinationState1] = useState<string>('');
//destination function to control the selected value
  const handleStateChange1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDestinationState1(e.target.value);
  };

  const [roundTrip, setRoundTrip] = useState(false);
  const [oneWay, setOneWay] = useState(true);

  //loading animation for the checkboxes
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const handleCheckboxChange1 = () => {
    setRoundTrip((prevChecked) => !prevChecked);
    setIsLoading1(true);

    if (!roundTrip) {
      setTimeout(() => {
        setIsLoading1(false);
      }, 200);
    }
    
    setOneWay(false)
  };

  const handleCheckboxChange2 = ()=> {
   setOneWay((prevChecked) => !prevChecked);
    setIsLoading2(true);
    if (!oneWay) {
      setTimeout(() => {
        setIsLoading2(false);
      }, 200);
    }
    setRoundTrip(false);
  };

  //pickup date state
  const [pickUpDate, setpickUpDate] = useState<Date | null>(null);

  const handlePickUpDate = (
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined
  ) => {
    setpickUpDate(date);
  };

  //return date state
  const [returnDate, setreturnDate] = useState<Date | null>(null);

  const handleReturnDate = (
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined
  ) => {
    setreturnDate(date);
  };
  return (
    <section className="min-h-[100dvh] w-[80%] md:w[50%] lg:w-[40%] mx-auto text-center md:h-fit text-white">
      <div>
        <div>
          <div className="text-center ">
            <h1 className="text-3xl mt-4 mb-4 ">Bus seats</h1>
            <p className="capitalize my-4">
              {" "}
              book your bus seats with us today{" "}
            </p>
            <div className="flex justify-center align-middle">
              <Image
                src="/services1.jpg"
                alt="bus img"
                width={400}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <article>
          <div className="card backdrop-blur-sm bg-gray-200/10 flex flex-col justify-center align-middle p-6 m-4  mx-auto rounded-2xl text-white/80 ">
            <div>
              <h1 className="font-semibold capitalize text-2xl mb-4  mt-8">
                Reserve your Seats Today
              </h1>
            </div>
            <form>
              <div className="my-6 space-x-3 ">
                <div className="links-container flex align-middle justify-center">
                  <label htmlFor="check1" className="check-box">
                    <input
                      id="check1"
                      type="checkbox"
                      className="checkbox hidden"
                      checked={roundTrip}
                      onChange={handleCheckboxChange1}
                    />
                    {/* rendering the svg conditionally */}
                    {!roundTrip ? (
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
                      checked={oneWay}
                      onChange={handleCheckboxChange2}
                      type="checkbox"
                    />
                    {/* rendering the svg conditionally */}
                    {!oneWay ? (
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
             
              <div> 
                {/* rendering the trip options conditionally */}
                {roundTrip ?(  
                <>
                <label htmlFor="destinationState1" className=""> 
                <StatePicker
                        onChange={takeOffStateChange} value={takeOff} destinationState1={false} />
                </label>
                <label htmlFor="destinationState">
                  <StatePicker
                        onChange={handleStateChange1} value={destinationState1} destinationState1={true} />
                </label>
                </>):(
                  <label htmlFor="destinationState">
                  <StatePicker
                        onChange={handleStateChange1} value={destinationState1} destinationState1={true} />
                </label>
                )}
             
                <div className="">
                  <label htmlFor="" className="">
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      className=" w-[90%] md:w-[90%] p-2 rounded-lg bg-slate-500 mb-8 outline-none text-white"
                    />
                  </label>

                  <label htmlFor="">
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className=" w-[90%] md:w-[90%] p-2 rounded-lg bg-slate-500 mb-8 outline-none text-white"
                    />
                  </label>
                </div>
               
                <div className=" md:flex mx-auto align-middle justify-center"> 
              {/* rendering the pickup date conditionally i.e if it's a return trip it displays the return date */}
                {roundTrip? (     <>
                <label htmlFor="">
                    <div className="mb-3">
                      <p>Pick up date</p>
                    </div>
                    <DatePicker
                      selected={pickUpDate}
                      onChange={handlePickUpDate}
                      placeholderText="Select a date"
                      className=".react-datepicker__month-container textarea  p-2 mr-2 w-[75%] rounded-lg bg-slate-500 mb-8 outline-none text-white"
                    />
                  </label>
                  <label htmlFor="">
                    <div className="mb-3">
                      <p>Return date</p>
                    </div>
                    <DatePicker
                      selected={returnDate}
                      onChange={handleReturnDate}
                      placeholderText="Select a date"
                      className=".react-datepicker__month-container textarea p-2 rounded-lg w-[75%] bg-slate-500 mb-8 outline-none text-white"
                    />
                  </label></>   ):(  <label htmlFor="">
                    <div className="mb-3">
                      <p>Pick up date</p>
                    </div>
                    <DatePicker
                      selected={pickUpDate}
                      onChange={handlePickUpDate}
                      placeholderText="Select a date"
                      className=".react-datepicker__month-container textarea  p-2 mr-2 w-[75%] rounded-lg bg-slate-500 mb-8 outline-none text-white"
                    />
                  </label>)}
          
                </div>
              </div>
            </form>
            <div className="flex justify-between mx-auto w-[80%]"></div>
            <button className="logo mx-auto bg-blue-700 w-[80%] p-2 rounded-xl active:bg-blue-950">
              Submit
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Bus;
