"use client";
import { useState, useRef, useEffect, SetStateAction } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useFormEffect } from "../useFormEffect"
export default function Login() {
  const {
    email,
    emailInputRef,
    isFocused,
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    wallet,
    walletInputRef,
    isWalletFocused,
    walletInputChange,
    walletInputFocus,
    walletInputBlur,
    password,
    passwordInputRef,
    isPasswordFocused,
    passwordInputChange,
    passwordInputFocus,
    passwordInputBlur,
  } = useFormEffect();
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <div className="min-h-[100dvh] mt-12 w-[90%] md:w-[40%] mx-auto ">
        <h1
          className="text-center uppercase text-red-300 mt-12 text-sm font-bold scroll-smooth tracking-wider"
          id="pricing"
        >
          Login
        </h1>
        <div className="border-2 rounded-2xl border-red-300  w-[7%] md:w-[4%] mx-auto mt-2"></div>
        <div className="card backdrop-blur-sm bg-gray-200/10 text-center p-6 m-4  mx-auto rounded-2xl text-white/80 ">
          <div>
            <h1 className="font-semibold capitalize text-2xl mb-16 mt-8">
              Login
            </h1>
          </div>
          <div>
              <label htmlFor="email" className={`label ${isFocused || email ? 'focused' : ''}`}>
            <input
              ref={inputRef}
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              required
              className="input w-[80%] bg-transparent border-b-2 mb-16 outline-none"
            />
            <span className="placeholder">E-mail</span>
          </label>
            <label htmlFor="" className={`label ${isWalletFocused || wallet ? 'focused' : ''}`}>
              <input
                 ref={inputRef}
                 type="text"
                 id="Blockchain Wallet"
                 name="Blockchain Wallet"
                 value={wallet}
                 onChange={walletInputChange}
                 onFocus={walletInputFocus}
                 onBlur={walletInputBlur}
                 required
                className="input w-[80%] bg-transparent border-b-2 mb-16 outline-none"
              />
               <span className="placeholder">Blockchain Wallet</span>
            </label>
            <label htmlFor="" className={`label ${isPasswordFocused || password ? 'focused' : ''}`}>
              <input
                 ref={inputRef}
                 type="text"
                 id="password"
                 name="password"
                 value={password}
                 onChange={passwordInputChange}
                 onFocus={passwordInputFocus}
                 onBlur={passwordInputBlur}
                 required
                className="input w-[80%] bg-transparent border-b-2 mb-16 outline-none"
              />
               <span className="placeholder">Password</span>
            </label>
          </div>
          <div className="flex justify-between mx-auto w-[80%]"></div>
          <button
            // onClick={handleSubmit}
            className="logo bg-blue-900 w-[80%] p-2  rounded-xl active:bg-blue-950"
            // disabled={!isFormValid}
          >
            Login
          </button>
          <div>
            <p className=" mt-6 mb-8">
              Already have an account ?
              <Link href="/admin" className="hover:text-blue-400 ml-1">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
