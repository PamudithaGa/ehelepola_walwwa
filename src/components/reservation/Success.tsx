import React from "react";

const Success: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
    <div className="bg-white shadow-lg rounded-xl p-10 text-center max-w-sm w-full">
      <div className="text-6xl mb-4 animate-bounce">✅</div>
      <h2 className="text-2xl font-bold text-green-700 mb-2">
        Payment Successful!
      </h2>
      <p className="text-gray-600 mb-6">
        Your reservation has been confirmed. Thank you for booking with us!
      </p>
      <button
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </button>
    </div>
  </div>
);

export default Success;
