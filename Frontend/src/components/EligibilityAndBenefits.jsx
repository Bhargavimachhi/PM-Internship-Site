import React from 'react';
// Using lucide-react for icons (install: npm install lucide-react)
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  IndianRupee, 
  Target
} from 'lucide-react'; 

const EligibilityAndBenefits = () => {
  // --- Data for Eligibility Cards (Left Side) ---
  const eligibilityData = [
    { 
      title: "Age", 
      details: "21-24 Years", 
      icon: <span className="text-5xl font-extrabold text-white">21</span>, 
      bgColor: "bg-orange-500", // The vibrant orange card
      subText: <div className="text-base font-semibold text-orange-500 mt-2">Age</div>
    },
    { 
      title: "Job Status", 
      details: "Not Employed Full Time", 
      icon: <Briefcase size={48} className="text-blue-600" />,
    },
    { 
      title: "Education", 
      details: "Not Enrolled Full Time", 
      icon: <GraduationCap size={48} className="text-orange-500" />,
    },
    { 
      title: "Family (Self/ Spouse / Parents)", 
      details: (
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 text-left">
          <li>No one is Earning more than ₹8 Lakhs PA</li>
          <li>No Member has a Govt. Job</li>
        </ul>
      ), 
      icon: <Users size={48} className="text-green-600" />,
    },
  ];

  // --- Data for Core Benefits Cards (Right Side) ---
  const benefitData = [
    { 
      details: "12 months real-life experience in India's top companies", 
      icon: <Briefcase size={48} className="text-blue-500" />,
      title: "Experience"
    },
    { 
      details: (
        <p>Monthly assistance of ₹4500 by Government of India and ₹500 by Industry</p>
      ), 
      icon: <IndianRupee size={48} className="text-yellow-600" />,
      title: "Assistance"
    },
    { 
      details: "One-time Grant of ₹6000 for incidentals", 
      icon: <IndianRupee size={48} className="text-yellow-600" />,
      title: "Grant"
    },
    { 
      details: "Select from Various Companies of India", 
      icon: <Target size={48} className="text-yellow-700" />,
      title: "Companies"
    },
  ];

  // --- Card Component (reusable for general cards) ---
  const Card = ({ title, details, icon, isOrange, isSpecial }) => (
    <div 
      className={`p-4 rounded-xl shadow-md flex flex-col items-center justify-start h-full text-center bg-white border border-gray-100 transition duration-300 hover:shadow-lg`}
    >
      <div 
        className={`w-24 h-24 rounded-full flex items-center justify-center mb-3 
          ${isSpecial ? 'bg-orange-500 shadow-xl' : 'bg-gray-50 border border-gray-200'}`}
      >
        {icon}
      </div>
      
      {/* Title/Label */}
      <p 
        className={`text-base font-semibold text-orange-600`}
      >
        {title}
      </p>
      
      {/* Details/Description */}
      <div className="mt-1 text-sm text-gray-600 font-normal w-full">
        {details}
      </div>
    </div>
  );

  return (
    <section className="container mx-auto py-12 px-4 bg-gray-50"> {/* Added a light background for contrast */}
      <div className="grid lg:grid-cols-2 gap-10">
        
        {/* === Left Column: Eligibility === */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Are you <span className="text-orange-600">Eligible</span> ?
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {eligibilityData.map((item, index) => (
              <Card 
                key={index} 
                title={item.title}
                details={item.details}
                icon={item.icon}
                isOrange={true} // Titles on the left side are orange
                isSpecial={index === 0} // The Age card is special (orange background)
              />
            ))}
          </div>
        </div>

        {/* === Right Column: Core Benefits === */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Core Benefits for <span className="text-orange-600">PM Internship</span> Scheme
          </h2>
            {/* {benefitData.map((item, index) => (
              <div key={index} className="p-4 bg-white rounded-xl shadow-md flex flex-col items-center text-center h-full border border-gray-100 transition duration-300 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-gray-50 border border-gray-200">
                  {item.icon}
                </div>
                <div className="mt-2 text-sm text-gray-600 font-normal">
                  {item.details}
                </div>
              </div>
            ))} */}
            <div className="grid grid-cols-2 gap-6">
            {benefitData.map((item, index) => (
              <Card 
                key={index} 
                title={item.title}
                details={item.details}
                icon={item.icon}
                isOrange={false} // Titles on the left side are orange
                isSpecial={false} // The Age card is special (orange background)
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityAndBenefits;