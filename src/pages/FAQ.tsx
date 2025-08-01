import React, { useState } from "react";

import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import FooterTopImage from "../assets/footer-image.png";
import FootetrtTopImageMobile from '../assets/footer-image-mobile.png'
import FooterArt2 from '../assets/gallery/perahera-art.png'
import FooterArt from "../assets/logos/ehelepola-walauwwe-logo-white.png";

// Child component
const FAQItem: React.FC<{
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b py-4">
      <button onClick={onClick} className="w-full text-left">
        <h3 className="text-lg font-semibold text-gray-700 flex justify-between">
          {title}
          <span>{isOpen ? "-" : "+"}</span>
        </h3>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{content}</p>}
    </div>
  );
};

// Parent component
const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      title: "What documents are required for international travel?",
      content:
        "You'll typically need a valid passport, visa (if applicable), and any health documents such as vaccination certificates depending on your destination.",
    },
    {
      title: "Can I reschedule or cancel my booking?",
      content:
        "Yes, most bookings can be rescheduled or canceled within a certain time frame. Check your booking details or contact our support team for assistance.",
    },
    {
      title: "Do you offer travel insurance?",
      content:
        "Absolutely! We partner with leading providers to offer affordable and comprehensive travel insurance options.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
          {/* header */}
      <section
        className={`absolute w-full z-50 transition-all duration-2000 ease-in-out`}
      >
        <NavBar page="entertainment" />
      </section>
    <section>
      <div className="flex justify-center items-center h-auto my-20 py-5">
        <div className="w-5/6 h-full mx-auto">
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-600">
              Your Questions, Answered Clearly
            </h2>
            <p className="text-primary font-bold text-title mt-8 mb-3">FAQs</p>
            <p className="mb-3 text-gray-500">
              We understand that planning your journey comes with many
              questions. This section covers the most common inquiries to help
              you make informed decisions with confidence. If you need further
              assistance, our team is just a message away.
            </p>
          </div>

          {/* Accordion */}
          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                title={faq.title}
                content={faq.content}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div></section>

            {/* footer top */}
      <section className="">
        <div>
          <img src={FooterTopImage} className='hidden md:block ' />
          <img src={FootetrtTopImageMobile} className='md:hidden block' />
        </div>

        {/* footer body */}
        <section className="bg-primary relative z-10">
          <div className="absolute h-11/12 py-5 right-0 opacity-5 scale-x-[-1]">
            <img src={FooterArt2} alt="" className="h-full w-full hidden lg:block" />
            <img src={FooterArt} alt="" className="h-140 w-200 hidden" />
          </div>

          <Footer />
        </section>
      </section>
    </>
  );
};

export default FAQSection;
