"use client";

const Footer = () => {
  return (
    <>
      <section
        className=" bg-blue-950/20 backdrop-blur-md relative w-full  text-gray-400 rounded-t-2xl mt-auto"
        id="about"
      >
        <div className=" w-[80%] md:w-[75%] mx-auto mt-12 pt-20">
          <div className=" md:grid md:grid-cols-2 md:gap-5 md:w-full mx-auto">
            <div>
              <h1 className="text-white">About App</h1>
              <p className="mt-4 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                natus nostrum. Recusandae!
              </p>
              <p className="mb-5">Follow Us </p>
            </div>
            <div className="grid grid-cols-2 md:gap-5 ">
              <div>
                <h2 className="text-white">Quick Links</h2>
                <ul>
                  <li>
                    <a
                      href="#pricing"
                      className="hover:border-b-2 hover:text-blue-300 hover:transition-all hover:ease-in-out cursor-pointer"
                    >
                      Info
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="hover:border-b-2 hover:text-blue-300 hover:transition-all hover:ease-in-out  cursor-pointer"
                    >
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="hover:border-b-2 hover:text-blue-300 hover:transition-all hover:ease-in-out  cursor-pointer"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="hover:border-b-2 hover:text-blue-300 hover:transition-all hover:ease-in-out  cursor-pointer"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-white">Help</h1>
                <ul>
                  <li>
                    <a href="" className="hover:text-white cursor-pointer">About Us</a>
                  </li>
                  <li>
                    <a href="" className="hover:text-white cursor-pointer">Partners</a>
                  </li>
                  <li>
                    <a href="" className="hover:text-white cursor-pointer">Subscribe</a>
                  </li>
                  <li>
                    <a href="" className="hover:text-white cursor-pointer">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border rounded-2xl   mx-auto mt-8 "></div>
          <div>
            <p className="text-center mt-6 pb-6">
              Z-Breed Copyright &copy; 2023
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
