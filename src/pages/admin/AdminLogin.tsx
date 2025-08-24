import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Logo from "../../../src/assets/logos/ehelepola-walauwwe-logo-black.png";

const AdminLogin: React.FC = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r bg-secondary">
      <div className="backdrop-blur-lg rounded-2xl shadow-lg p-8 w-[400px] h-auto flex items-center flex-col bg-white/20">
        <div className="w-[150px] mb-6">
          <img src={Logo} alt="MAS Holdings Logo" />
        </div>

        <h2 className="text-center text-lg font-semibold text-black mb-6">
          Please login to your account
        </h2>

        <form className="space-y-4 w-full">
          <div className="flex items-center  bg-white/30 rounded-lg px-3 py-2 hover:border-primary border border-transparent transition-colors duration-200">
            <input
              type="text"
              placeholder="Username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent  p-2 rounded-xl flex-1 outline-none text-black placeholder-black/60 hover:border-primary"
              required
            />
          </div>

          <div className="flex items-center bg-white/30 rounded-lg px-3 py-2 hover:border-primary border border-transparent transition-colors duration-200">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent  p-2 rounded-xl flex-1 outline-none text-black placeholder-black/60 hover:border-primary"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-white/80"
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-primary/80 hover:bg-primary text-white py-2 rounded-lg transition cursor-pointer"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
