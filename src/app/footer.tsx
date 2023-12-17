"use client";

const Footer = () => {
  return (
    <>
      <section
        className="footer bg-white/10 w-full text-gray-400 rounded-t-2xl "
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
                      className="hover:border-b-2 hover:text-teal-400 hover:transition-all hover:ease-in-out hover:border-teal-400 "
                    >
                      Info
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="hover:border-b-2 hover:text-teal-400 hover:transition-all hover:ease-in-out hover:border-teal-400 "
                    >
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="hover:border-b-2 hover:text-teal-400 hover:transition-all hover:ease-in-out hover:border-teal-400 "
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="hover:border-b-2 hover:text-teal-400 hover:transition-all hover:ease-in-out hover:border-teal-400 "
                    >
                      Caareers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-white">Help</h1>
                <ul>
                  {" "}
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Partners</a>
                  </li>
                  <li>
                    <a href="">Subscribe</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
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
