import React, { useState } from 'react';
// Using lucide-react for icons (install: npm install lucide-react)
import { Smartphone, X } from 'lucide-react'; 

const RegisterModal = ({ isOpen, onClose }) => {
  // Don't render anything if the modal is not open
  if (!isOpen) return null;

  const [mobileNumber, setMobileNumber] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isConfirmed) {
      alert('Please confirm that the provided mobile number is unique.');
      return;
    }
    
    // 1. You would integrate your actual registration API call here.
    console.log('Registering youth with mobile:', mobileNumber);
    
    // 2. Clear fields and close the modal on successful (or mock) submission
    // NOTE: In a real app, you'd only close on success.
    setMobileNumber('');
    setIsConfirmed(false);
    onClose(); 
  };

  return (
    // --- Modal Overlay ---
    // Fixed position, covers entire screen, semi-transparent background
    <div 
      className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Allows closing by clicking outside the modal
    >
      
      {/* --- Modal Content / Register Form --- */}
      {/* Prevents closing the modal when clicking inside the content */}
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative shadow-xl"
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
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          REGISTER YOUTH
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* --- Mobile Number Input --- */}
          <div className="relative">
            <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="tel" // Use type="tel" for phone numbers
              placeholder="Enter 10-digits mobile no."
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))} // Allow only digits, max 10
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
              maxLength="10"
              pattern="\d{10}" // HTML5 pattern for 10 digits
              title="Please enter a 10-digit mobile number"
              required
            />
          </div>

          {/* --- Confirmation Checkbox --- */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="confirmUnique"
              checked={isConfirmed}
              onChange={(e) => setIsConfirmed(e.target.checked)}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              required // Make confirmation mandatory
            />
            <label htmlFor="confirmUnique" className="ml-3 text-sm text-gray-700 select-none">
              I confirm that the provided mobile number is unique.
            </label>
          </div>

          {/* --- Submit Button --- */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!mobileNumber || mobileNumber.length !== 10 || !isConfirmed} // Disable if conditions not met
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;