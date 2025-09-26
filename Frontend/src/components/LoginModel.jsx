import React, { useState } from "react";
// Using lucide-react for icons (install: npm install lucide-react)
import { User, Lock, Eye, EyeOff, X } from "lucide-react";

const LoginModal = ({ isOpen, onClose }) => {
  // Don't render anything if the modal is not open
  if (!isOpen) return null;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 1. You would integrate your actual login API call here.
    console.log("Attempting login with:", { username, password });

    // 2. Clear fields and close the modal on successful (or mock) submission
    // NOTE: In a real app, you'd only close on success.
    setUsername("");
    setPassword("");
    onClose();
  };

  return (
    // --- Modal Overlay ---
    // Fixed position, covers entire screen, semi-transparent background
    <div
      className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Allows closing by clicking outside the modal
    >
      {/* --- Modal Content / Login Form --- */}
      {/* Prevents closing the modal when clicking inside the content */}
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* --- Close Button --- */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* --- Header / Title --- */}
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">
          LOGIN
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Login using Username / Mobile / CIN
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* --- Username / Mobile / CIN Input --- */}
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Enter Username / Mobile / CIN"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>

          {/* --- Password Input --- */}
          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label={showPassword ? "Hide Password" : "Show Password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* --- Login Button --- */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        {/* --- Forgot Password Link --- */}
        <div className="text-center mt-3">
          <a
            href="/forgot-password"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            Forgot / Reset Password
          </a>
        </div>

        {/* --- Notes / Instructions --- */}
        <div className="mt-6 space-y-3 p-4 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-100">
          <p className="note-item">
            <span className="font-semibold">Note:</span> User ID and One Time
            Password have been sent to the email address you provided. Please
            use them to log in to your account.
          </p>
          <p className="note-item">
            <span className="font-semibold">Note:</span> Your account will be
            blocked for 15 minutes if you enter incorrect password in 3
            consecutive attempts. Please reset your password if your account is
            blocked.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
