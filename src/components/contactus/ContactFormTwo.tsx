import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

// Icons
import { GoLocation } from "react-icons/go";
import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { TextField, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


const ContactFormTwo: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendContactEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const data = new FormData(formRef.current);
    const contactData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      subject: data.get("subject"),
      message: data.get("message"),
    };

    console.log("Before Contact Data:", contactData);

    emailjs
      .sendForm(
        "service_jakx4qq",
        "template_80yb4bp",
        formRef.current,
        "XANFY_YY290qHq7ZO"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          console.log("After Contact Data:", contactData);

          toast("Message sent successfully!");
          formRef.current?.reset();
          setEmail("");
          setMessage("");
          setSubject("");
          setfirstName("");
          setlastName("");
        },
        (error) => {
          console.error("Email failed:", error.text);
          toast("Failed to send. Try again later.");
        }
      );
  };
  return (
    <div className="relative">
      <div className="lg:w-5/6 mx-auto flex justify-center items-center h-auto lg:h-[100vh]">
        <div className="flex flex-col-reverse lg:flex-row w-full lg:gap-18 gap-10 justify-center items-center ">
          <div className="w-11/12  lg:w-3/5 flex justify-center items-center flex-col  ">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <form
                ref={formRef}
                onSubmit={sendContactEmail}
                className="w-full  flex flex-col  gap-3"
              >
                <TextField
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={firstName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value: string = e.target.value;
                    setfirstName(value);
                  }}
                  sx={{
                    input: { color: "white" }, // input text
                    label: {
                      color: "white",
                      backgroundColor: "black",
                      px: 0.5,
                    }, // floating label
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                    "& label.Mui-focused": {
                      color: "white",
                      backgroundColor: "black",
                    },
                  }}
                />

                <TextField
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={lastName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value: string = e.target.value;
                    setlastName(value);
                  }}
                  sx={{
                    input: { color: "white" }, // input text
                    label: {
                      color: "white",
                      backgroundColor: "black",
                      px: 0.5,
                    }, // floating label
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                    "& label.Mui-focused": {
                      color: "white",
                      backgroundColor: "black",
                    },
                  }}
                />

                <TextField
                  name="email"
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value: string = e.target.value;
                    setEmail(value);
                  }}
                  sx={{
                    input: { color: "white" }, // input text
                    label: {
                      color: "white",
                      backgroundColor: "black",
                      px: 0.5,
                    }, // floating label
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                    "& label.Mui-focused": {
                      color: "white",
                      backgroundColor: "black",
                    },
                  }}
                />

                <TextField
                  name="subject"
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  required
                  value={subject}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value: string = e.target.value;
                    setSubject(value);
                  }}
                  sx={{
                    input: { color: "white" }, // input text
                    label: {
                      color: "white",
                      backgroundColor: "black",
                      px: 0.5,
                    }, // floating label
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                    "& label.Mui-focused": {
                      color: "white",
                      backgroundColor: "black",
                    },
                  }}
                />

                <TextField
                  name="message"
                  label="Message"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={6}
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value: string = e.target.value;
                    setMessage(value);
                  }}
                  sx={{
                    input: { color: "white" },
                    textarea: { color: "white" }, // 👈 style textarea text too
                    label: {
                      color: "white",
                      backgroundColor: "black",
                      px: 0.5,
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                    "& label.Mui-focused": {
                      color: "white",
                      backgroundColor: "black",
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  className="mt-4"
                  sx={{
                    px: 2,
                    py: 2,
                    textTransform: "none",
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    color: "white",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                      borderColor: "white",
                    },
                  }}
                >
                  Submit
                </Button>
              </form>
            </LocalizationProvider>

            {/* Conatct for mobile */}
            <div className=" lg:hidden flex flex-col gap-8 mt-10 mb-10">
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

          <div className="lg:w-2/5 w-11/12 h-full md:w-full mt-10 md:mt-10 lg:-mt-30">
            <h1 className="font-bold lg:text-[75px] text-[72px] leading-tight flex flex-wrap gap-x-5">
              {"Contact Us".split(" ").map((word, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-t from-white to-transparent bg-clip-text text-transparent"
                >
                  {word}
                </span>
              ))}
            </h1>

            <div className="lg:hidden block mt-5 mb-5">
              <img src="https://assets.ehelepolawalawwa.lk/assets/assets/assets/logos/walawwa-building.webp" alt="" />
            </div>

            <p className="mb-3 text-gray-500 ">
              Connect with Ehelepola Walauwa for inquiries about visits, events,
              heritage tours, shopping experiences, and cultural programs in
              historic Kandy.
            </p>

            {/* Contact Info for desktop*/}
            <div className=" hidden lg:flex flex-col gap-8 mt-10 h-full ">
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

export default ContactFormTwo;
