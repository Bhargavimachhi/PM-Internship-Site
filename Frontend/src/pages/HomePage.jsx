import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function InternshipPage() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Top Black Bar */}
      <div className="bg-black text-white text-sm flex items-center justify-between px-4 py-1">
        <span>भारत सरकार / Government Of India</span>
        <div className="flex items-center gap-2">
          <span className="cursor-pointer">English</span>
          <span className="cursor-pointer">Screen Reader</span>
          <span className="cursor-pointer">A-</span>
          <span className="cursor-pointer">A</span>
          <span className="cursor-pointer">A+</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-6 py-3 border-b">
        <div className="flex items-center gap-4">
          <img src="/logo1.png" alt="Gov Logo" className="h-12" />
          <img src="/logo2.png" alt="Internship Logo" className="h-12" />
        </div>
        <div className="flex gap-3">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded px-4 py-2">
            Youth Registration
          </Button>
          <Button className="bg-[#0d47a1] hover:bg-[#1565c0] text-white rounded px-4 py-2">
            Login
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#0d47a1] text-white px-6 py-2 flex gap-6 text-sm">
        <span className="cursor-pointer">HOME</span>
        <div className="relative group cursor-pointer">
          <span className="flex items-center gap-1">
            GUIDELINES/DOCUMENTATIONS <ChevronDown size={14} />
          </span>
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-md w-48">
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Partner Companies</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Guidelines</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQs</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Manuals</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Guidance Videos</div>
          </div>
        </div>
        <span className="cursor-pointer">GALLERY</span>
        <span className="cursor-pointer">ELIGIBILITY</span>
        <span className="cursor-pointer">MOBILE APP</span>
        <span className="cursor-pointer">SUPPORT</span>
        <span className="cursor-pointer">COMPENDIUM</span>
      </nav>

      {/* Banner */}
      <div className="relative bg-gradient-to-r from-orange-400 to-orange-500 px-10 py-12 flex items-center justify-between">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Seed Your Bank Account <br />
            <span className="text-blue-900 bg-white px-2 py-1 rounded">with Aadhaar to Receive Financial Assistance.</span>
          </h1>
          <p className="text-sm mb-4">
            To receive your financial assistance without any issues, make sure your
            bank account is seeded with your Aadhaar. This is a mandatory step to
            ensure smooth and timely disbursal of funds. Complete the seeding
            process now and stay hassle-free!
          </p>
          <Button className="bg-[#0d47a1] text-white px-6 py-2 rounded">
            Check Status
          </Button>
        </div>
        <div>
          <img src="/pm-modi.png" alt="PM Modi" className="h-80" />
        </div>
      </div>
    </div>
  );
}
