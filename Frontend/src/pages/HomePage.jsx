import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  BookOpenText,
  ChevronDown,
  FileSpreadsheet,
  HeartPlus,
  House,
  Smartphone,
  ThumbsUp,
  Video,
} from "lucide-react";

// Importing images from assets
import logo1 from "../assets/MCA.svg";
import logo2 from "../assets/pm_internship_logo_eng.svg";
import home1 from "../assets/homepageimage1.png";
import home2 from "../assets/homepageimage2.png";
import indialogo from "../assets/india-flag.jpg";
import RegisterModal from "../components/RegisterModel";
import LoginModal from "../components/LoginModel";
import EligibilityAndBenefits from "../components/EligibilityAndBenefits";

const languages = [
  { code: "as", name: "Assamese" },
  { code: "bn", name: "Bengali" },
  { code: "en", name: "English" },
  { code: "gu", name: "Gujarati" },
  { code: "hi", name: "Hindi" },
  { code: "kn", name: "Kannada" },
  { code: "ml", name: "Malayalam" },
  { code: "mr", name: "Marathi" },
  { code: "or", name: "Odia" },
  { code: "pa", name: "Punjabi" },
  { code: "te", name: "Telugu" },
  { code: "ta", name: "Tamil" },
];

const navItems = [
  { logo: <House size={20} />, text: "HOME" },
  { logo: <FileSpreadsheet />, text: "GUIDELINES/DOCUMENTATIONS" },
  { logo: <Video />, text: "GALLERY" },
  { logo: <ThumbsUp />, text: "ELIGIBILITY" },
  { logo: <Smartphone />, text: "MOBILE APP" },
  { logo: <HeartPlus />, text: "SUPPORT" },
  { logo: <BookOpenText />, text: "COMPENDIUM" },
];

export default function InternshipPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [home1, home2];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (value) => {
    setIsModalOpen(value);
  };

  const handleCloseModal = () => {
    setIsModalOpen("");
  };

  // Toggle image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Top Black Bar */}
      <div className="bg-black text-white text-sm flex items-center justify-between px-4 py-1">
        <span className="flex items-center">
          <img src={indialogo} alt="Gov Logo" className="h-5 mr-2" />
          भारत सरकार / Government Of India
        </span>
        <div className="flex items-center gap-2 bg-white rounded-md">
          <select className="cursor-pointer border rounded px-2 py-1 text-black">
            {languages.map((language) => (
              <option key={language.code} value={language.code}>
                {language.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-6 py-3 border-b">
        <div className="flex items-center gap-4">
          <img src={logo1} alt="Gov Logo" className="h-12" />
          <img src={logo2} alt="Internship Logo" className="h-12" />
        </div>
        <div className="flex gap-3">
          <Button
            onClick={() => handleOpenModal("signup")}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded px-4 py-2"
          >
            Youth Registration
          </Button>
          <RegisterModal
            isOpen={isModalOpen == "signup"}
            onClose={handleCloseModal}
          />
          <Button
            onClick={() => handleOpenModal("login")}
            className="bg-[#0d47a1] hover:bg-[#1565c0] text-white rounded px-4 py-2"
          >
            Login
          </Button>

          <LoginModal
            isOpen={isModalOpen == "login"}
            onClose={handleCloseModal}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-blue-950 text-white px-1 py-1 flex gap-10 text-sm rounded-md m-2 items-center">
        {navItems.map((item, index) => (
          <span
            key={index}
            className="cursor-pointer flex items-center gap-2 border-b-3 border-transparent hover:border-orange-500 transition-all"
          >
            {item.logo} {item.text}
          </span>
        ))}
      </nav>

      <hr />

      {/* Alternating Banner Images */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Banner ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      
    </div>
    <EligibilityAndBenefits />
    </>
  );
}
