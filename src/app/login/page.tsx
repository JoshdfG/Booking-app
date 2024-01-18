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

  // const handleButtonClick = () => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // };
  // type Errors = {
  //   name?: string;
  //   email?: string;
  //   password?: string;
  // };
  
  // type SetErrors = (errors: Errors) => void;
  // type SetIsFormValid = (isValid: boolean) => void;

  // const [name, setName] = useState<string>('');
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  // const [errors, setErrors] = useState<Errors>({});
  // const [isFormValid, setIsFormValid] = useState<boolean>(false);

  // useEffect(() => {
  //   validateForm();
  // }, [name, email, password]);

  // const validateForm = () => {
  //   let errors: Errors = {};

  //   if (!name) {
  //     errors.name = 'Name is required.';
  //   }

  //   if (!email) {
  //     errors.email = 'Email is required.';
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     errors.email = 'Email is invalid.';
  //   }

  //   if (!password) {
  //     errors.password = 'Password is required.';
  //   } else if (password.length < 6) {
  //     errors.password = 'Password must be at least 6 characters.';
  //   }

  //   setErrors(errors);
  //   setIsFormValid(Object.keys(errors).length === 0);
  // };

  // const handleSubmit = () => {
  //   if (isFormValid) {
  //     console.log('Form submitted successfully!');
  //   } else {
  //     console.log('Form has errors. Please correct them.');
  //   }
  // };
  // const [email, setEmail] = useState('');
  // const [isFocused, setIsFocused] = useState(false);
  // // const inputRef = useRef();

  // const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
  //   setEmail(e.target.value);
  // };

  // const handleInputFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleInputBlur = () => {
  //   setIsFocused(false);
  // };

  // const [wallet, setWallet] = useState('');
  // const [isWalletFocused, setIsWalletFocused] = useState(false);
  // // const inputRef = useRef();

  // const walletInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
  //   setEmail(e.target.value);
  // };

  // const walletInputFocus = () => {
  //   setIsFocused(true);
  // };

  // const walletInputBlur = () => {
  //   setIsFocused(false);
  // };
  // const [email, setEmail] = useState('');
  // const [isFocused, setIsFocused] = useState(false);
  // const emailInputRef = useRef();

  // const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
  //   setEmail(e.target.value);
  // };

  // const handleInputFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleInputBlur = () => {
  //   setIsFocused(false);
  // };

  // const [wallet, setWallet] = useState('');
  // const [isWalletFocused, setIsWalletFocused] = useState(false);
  // const walletInputRef = useRef();

  // const walletInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
  //   setWallet(e.target.value);
  // };

  // const walletInputFocus = () => {
  //   setIsWalletFocused(true);
  // };

  // const walletInputBlur = () => {
  //   setIsWalletFocused(false);
  // };

  // const [password, setPassword] = useState('');
  // const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  // const passwordInputRef = useRef();

  // const passwordInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
  //   setPassword(e.target.value);
  // };

  // const passwordInputFocus = () => {
  //   setIsPasswordFocused(true);
  // };

  // const passwordInputBlur = () => {
  //   setIsPasswordFocused(false);
  // };
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
              <label htmlFor="email" className={` ${isFocused || email ? 'focused' : ''}`}>
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
              className="w-[80%] bg-transparent border-b-2 mb-16 outline-none"
            />
            <span className="placeholder">E-mail</span>
          </label>
            <label htmlFor="" className={` ${isWalletFocused || wallet ? 'focused' : ''}`}>
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
                className="w-[80%] bg-transparent border-b-2 mb-16 outline-none"
              />
               <span className="placeholder">Blockchain Wallet</span>
            </label>
            <label htmlFor="" className={` ${isPasswordFocused || password ? 'focused' : ''}`}>
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
                className="w-[80%] bg-transparent border-b-2 mb-16 outline-none"
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
