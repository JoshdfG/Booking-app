import { useState, useRef, SetStateAction } from 'react';

export const useFormEffect = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const emailInputRef = useRef();

  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const [wallet, setWallet] = useState('');
  const [isWalletFocused, setIsWalletFocused] = useState(false);
  const walletInputRef = useRef();

  const walletInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setWallet(e.target.value);
  };

  const walletInputFocus = () => {
    setIsWalletFocused(true);
  };

  const walletInputBlur = () => {
    setIsWalletFocused(false);
  };

  const [password, setPassword] = useState('');
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const passwordInputRef = useRef();

  const passwordInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const passwordInputFocus = () => {
    setIsPasswordFocused(true);
  };

  const passwordInputBlur = () => {
    setIsPasswordFocused(false);
  };

  return {
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
  };
};
