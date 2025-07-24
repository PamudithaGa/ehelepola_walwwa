import React,{useEffect} from 'react'
import { FaTools } from "react-icons/fa";
import { Link } from "react-router";

const AboutUs:React.FC = () => {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
       <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg animate-fade-in">
        <div className="flex justify-center mb-6 text-primary">
          <FaTools className="text-6xl animate-bounce-slow" />
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
          This Page is Under Development
        </h1>
        <p className="text-gray-600 text-base mb-6">
          We’re working hard to build this section. Please check back soon!
        </p>
        <Link 
        to="/"
          className="inline-block mt-4 px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-highlight transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
    </div>
  )
}

export default AboutUs
