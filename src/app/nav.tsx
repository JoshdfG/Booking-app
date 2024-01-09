"use client";
import { MouseEvent, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { links } from "./data";
import Link from "next/link"; // Use Next.js Link for navigation

const Nav = () => {
  const [open, setOpen] = useState(false);

  // Use useRef with HTMLDivElement type
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      const mouseEvent = event as unknown as MouseEvent;
      if (
        menuRef.current &&
        !menuRef.current.contains(mouseEvent.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuRef, setOpen]);

  return (
    <header className="relative  w-full z-[1000] hover:shadow-xl">
      <div className="footer bg-black shadow-xl p-4 z-[1000]">
        <nav className="flex justify-between items-center w-[95%] md:w-[90%]  mx-auto p-1 my-auto  ">
          <div className=" font-bold text-2xl text-blue-900 ">
            GIGM.<span className="text-purple-800 ">COM</span>
          </div>

          <div className="text-white tracking-wider">
            <ul className="hidden  md:flex align-middle justify-center space-x-6 ">
              {links.map((link) => {
                type link = {
                  id: number;
                  url: string;
                  text: string;
                };
                const { id, url, text } = link;
                return (
                  <motion.li
                    className="hover:text-blue-500 active:text-blue-900 font-semibold "
                    whileHover={{ scale: 1.1, originX: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    key={id}
                  >
                    <Link href={url}>{text}</Link>
                  </motion.li>
                );
              })}
              <Link href="/login">
                <motion.button
                  className="logo bg-transparent border px-3 py-1 rounded-lg transition-all duration-75 ease-in-out  text-white mr-6 hover:bg-blue-900 tracking-wider "
                  whileHover={{ scale: 1.1, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Login
                </motion.button>
              </Link>
            </ul>
            <div className="flex justify-center align-middle">
              <div>
                <Link href="/login">
                  <motion.button
                    className="bg-transparent border px-3 py-1 rounded-lg text-white mr-2 transition-all duration-75 ease-in-out  hover:bg-blue-900  md:hidden tracking-wider logo active:outline-none active:bg-green-950"
                    whileHover={{ scale: 1.05, originX: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Login
                  </motion.button>
                </Link>
              </div>
              <motion.button
                className="border-none"
                type="button"
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {open === true ? (
                  <FaTimes className=" text-2xl cursor-pointer text-white hover:text-blue-900 transition-all duration-75 ease-in-out border-none md:hidden hover:shadow-teal-400 active:text-blue-950 active:outline-none" />
                ) : (
                  <TiThMenu className=" text-2xl text-white border-none cursor-pointer md:hidden transition-all duration-75 ease-in-out hover:shadow-teal-200 hover:shadow-2xl hover:text-blue-900 active:text-blue-950 active:outline-none active:border-none" />
                )}
              </motion.button>
            </div>
          </div>
          {/* mobile menu */}
        </nav>
        <AnimatePresence>
          {open &&(
            <motion.div
              ref={menuRef}
              className=" 
              md:hidden absolute overflow-hidden backdrop-blur-sm bg-black/95 left-0 right-0 mt-3 text-center rounded-b-2xl p-6 z-[999] hover:overflow-hidden"
              initial={{ opacity: 0, y: "-100%", zIndex: "-1" }}
              animate={{
                opacity: 1,
                y: "0",
              }}
              exit={{
                opacity: 0,
                y: "-100%",
                zIndex: "-1",
                transition: { duration: "0.25" },
              }}
              transition={{
                type: "string",
                stiffness: "300",
                duration: "0.55",
              }}
            >
              <ul className="text-center md:hidden space-y-6  font-semibold ">
                {/* stating the types of link */}
                {links.map((link) => {
                  type link = {
                    id: number;
                    url: string;
                    text: string;
                  };
                  const { id, url, text } = link;
                  return (
                    <motion.li
                      onClick={() => setOpen(false)}
                      className="hover:rounded-lg p-1 ease-in-out w-full hover:text-blue-500 active:text-blue-900  "
                      whileHover={{ scale: 1.03, originX: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      key={id}
                    >
                      <Link href={url}>{text}</Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Nav;
