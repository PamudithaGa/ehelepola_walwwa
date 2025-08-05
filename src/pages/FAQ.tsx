import React, { useState, useEffect } from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import FooterTopImage from "../assets/footer-image.png";
import FootetrtTopImageMobile from "../assets/footer-image-mobile.png";
import FooterArt2 from "../assets/gallery/perahera-art.png";
import FooterArt from "../assets/logos/ehelepola-walauwwe-logo-white.png";

const FAQSection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      title: "What are the opening hours of Ehelepola Walawwa?",
      content: (
        <p>
          • Ehelepola Walawwa is open daily from 9:00 AM to 6:00 PM.
        </p>
      ),
    },
    {
      title: "What are the ticket prices for visitors?",
      content: (
        <ul className="list-disc list-inside">
          <li>LKR 100 – Students in school uniform</li>
          <li>LKR 200 – Children aged 6 to 16</li>
          <li>LKR 400 – Adults</li>
          <li>USD 10 – Foreign nationals</li>
        </ul>
      ),
    },
    {
      title: "Where is Ehelepola Walawwa located and how can I get there?",
      content: (
        <div className="space-y-2">
          <p>
            • Ehelepola Walawwa is located on Raja Veediya, just northwest of the Sri Dalada Veediya/D.S. Senanayake Veediya intersection.
          </p>
          <p>
            • It’s about a 5-minute walk north from the Temple of the Tooth, via D.S. Senanayake Veediya, then turning onto Raja Veediya.
          </p>
        </div>
      ),
    },
    {
      title: "Where can I purchase tickets to visit Ehelepola Walawwa?",
      content: (
        <div className="space-y-2">
          <p>• All tickets can be purchased directly at the Ehelepola Walawwa ticket counter.</p>
          <p>• Online bookings are only available for school group reservations via the website.</p>
        </div>
      ),
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* Nav */}
      <section className="absolute w-full z-50 transition-all duration-2000 ease-in-out">
        <NavBar page="faq" />
      </section>

      {/* Hero section */}
      <section className="bg-primary">
        <div>
          <h1 className="text-secondary pt-30 lg:pt-50 pb-10 leading-15 text-center lg:text-6xl text-[42px] font-bold">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="flex flex-col justify-center items-center h-auto mt-20 py-5">
          <div className="w-5/6 h-full mx-auto">
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-gray-600">
                Your Questions, Answered Clearly
              </h2>
              <p className="text-primary font-bold text-3xl mt-8 mb-3">FAQs</p>
              <p className="mb-3 text-gray-500">
                We understand that planning your journey comes with many questions. This section
                covers the most common inquiries to help you make informed decisions with confidence.
                If you need further assistance, our team is just a message away.
              </p>
            </div>

            <div>
              {faqs.map((faq, index) => (
                <div key={index} className="border-b py-4">
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full text-left cursor-pointer"
                  >
                    <h3 className="text-lg font-semibold text-gray-700 flex justify-between">
                      {faq.title}
                      <span>{openIndex === index ? "-" : "+"}</span>
                    </h3>
                  </button>
                  {openIndex === index && (
                    <div className="mt-2 text-gray-600">{faq.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Top */}
      <section>
        <div>
          <img src={FooterTopImage} className="hidden md:block" alt="footer-top" />
          <img src={FootetrtTopImageMobile} className="md:hidden block" alt="footer-top-mobile" />
        </div>

        {/* Footer Body */}
        <section className="bg-primary relative z-10">
          <div className="absolute h-11/12 py-5 right-0 opacity-5 scale-x-[-1]">
            <img
              src={FooterArt2}
              alt=""
              className="h-full w-full hidden lg:block"
            />
            <img src={FooterArt} alt="" className="h-140 w-200 hidden" />
          </div>

          <Footer />
        </section>
      </section>
    </>
  );
};

export default FAQSection;
