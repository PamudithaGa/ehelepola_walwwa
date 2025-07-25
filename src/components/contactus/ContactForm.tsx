import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

// Icons
import { GoLocation } from "react-icons/go";
import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_yfqaflt",
        "template_kplovqr",
        formRef.current,
        "drWaOS1M4jZoA-zDE"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          toast.success("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error("Failed to send:", error.text);
          toast.error("Something went wrong. Try again");
        }
      );
  };

  return (
    <div>
      <div className="w-5/6 mx-auto flex justify-center items-center h-auto lg:h-[100vh]">
        <div className="flex flex-col-reverse lg:flex-row w-full">
          <div className="w-full lg:w-2/3 flex justify-center items-center">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="w-full lg:pr-20 flex flex-col gap-3 mt-10 lg:m-0 lg:mb-0 mb-15 md:mb-20"
            >
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                className="w-full text-mainfont text-base lg:w-full lg:text-base py-3 px-2 rounded-2xl border-2 border-gray-400 focus:ring-1 focus:ring-secondary focus:outline-none focus:border-primary placeholder:text-[#949494] placeholder:text-xs lg:placeholder:text-base"
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                className="w-full text-mainfont text-base lg:w-full lg:text-base py-3 px-2 rounded-2xl border-2 border-gray-400 focus:ring-1 focus:ring-secondary focus:outline-none focus:border-primary placeholder:text-[#949494] placeholder:text-xs lg:placeholder:text-base"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="w-full text-mainfont text-base lg:w-full lg:text-base py-3 px-2 rounded-2xl border-2 border-gray-400 focus:ring-1 focus:ring-secondary focus:outline-none focus:border-primary placeholder:text-[#949494] placeholder:text-xs lg:placeholder:text-base"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject (optional)"
                className="w-full text-mainfont text-base lg:w-full lg:text-base py-3 px-2 rounded-2xl border-2 border-gray-400 focus:ring-1 focus:ring-secondary focus:outline-none focus:border-primary placeholder:text-[#949494] placeholder:text-xs lg:placeholder:text-base"
              />

              <textarea
                name="message"
                placeholder="Enter your message here..."
                rows={6}
                className="w-full text-base lg:w-full lg:text-base py-3 px-2 rounded-2xl border-2 resize-none border-gray-400 text-mainfont focus:ring-1 focus:ring-secondary focus:outline-none focus:border-primary placeholder:text-[#949494] placeholder:text-xs lg:placeholder:text-base"
                required
              ></textarea>

              <button
                type="submit"
                className="border-2 border-primary rounded-2xl text-body text-xs md:w-full lg:w-45 lg:text-base hover:bg-primary/[0.8] hover:cursor-pointer hover:text-secondary transition duration-300 ease-in-out hover:border-transparent bg-secondary font-semibold px-3 py-3 flex gap-2 justify-center items-center mt-10"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="lg:w-1/3 w-full md:w-full mt-20 md:mt-15 lg:mt-0">
            <h2 className="text-xl font-semibold text-gray-600 text-center lg:text-left">
              Write Directly to Us
            </h2>
            <p className="text-primary font-bold text-title mt-3 lg:mt-2 mb-3 text-center lg:text-left">
              Connect With
            </p>
            <p className="mb-3 text-gray-500">
Connect with Ehelepola Walauwa for inquiries about visits, events, heritage tours, shopping experiences, and cultural programs in historic Kandy.
            </p>

            <div className="flex flex-col gap-8 mt-10">
              <ul className=" w-full lg:w-full font-normal flex flex-col gap-2 lg:gap-3 lg:flex-col lg:pl-0 lg:justify-between">
                <li className="flex flex-row items-center gap-2 text-body/[0.8]">
                  <CiPhone className="text-gray-200 text- bold text-sm w-10 h-10 p-2 border bg-primary rounded-2xl bg-body hover:border-primary hover:bg-secondary hover:text-primary" />
                  <div className="text-gray-500">
                    <p>+94 777 371 464 | +94 707 371 464</p>
                  </div>
                </li>
                <li className="flex flex-row items-center gap-2 text-gray-500/[0.8]">
                  <IoMailOutline className="text-gray-200 text- bold text-sm w-10 h-10 p-2 border bg-primary rounded-2xl bg-body hover:border-primary hover:bg-secondary hover:text-primary" />
                  <div className="text-gray-500">
                    <p>info@eahelepolawalawwa.com</p>
                  </div>
                </li>
                <li className="flex flex-row items-center gap-2 text-gray-500/[0.8]">
                  <GoLocation className="text-gray-200 text- bold text-sm w-10 h-10 p-2 border bg-primary rounded-2xl bg-body hover:border-primary hover:bg-secondary hover:text-primary" />
                  <div className="text-gray-500">
                    <p>
                      Ehelepola Walawwa, Raja Veediya, Senkadagala, Mahanuwara
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
       <Toaster position="top-right" />
    </div>
  );
};

export default ContactForm;
