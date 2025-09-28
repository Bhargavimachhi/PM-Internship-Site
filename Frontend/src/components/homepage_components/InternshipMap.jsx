import React, { useState } from "react";

const stateInternshipData = {
  UP: {
    stateName: "Uttar Pradesh",
    total: 7710,
    tenth: 2387,
    twelfth: 809,
    iti: 1221,
    diploma: 617,
    graduation: 2676,
  },
  MH: {
    stateName: "Maharashtra",
    total: 4800,
    tenth: 1500,
    twelfth: 600,
    iti: 800,
    diploma: 500,
    graduation: 1400,
  },
  // Add other states as needed
};

export default function InternshipMap() {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (event) => {
    const stateId = event.target.id.toUpperCase();
    if (stateInternshipData[stateId]) {
      setSelectedState(stateInternshipData[stateId]);
    } else {
      setSelectedState(null);
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-10 bg-gray-50 min-h-screen">
      <div className="md:w-3/5 relative">
        {selectedState && (
          <div className="absolute bg-white shadow-xl rounded-lg p-6 top-24 left-12 w-80 z-30 border border-gray-300">
            <div className="bg-blue-600 text-white font-bold p-3 rounded-t-lg text-lg text-center">
              Internship Opportunities
            </div>
            <table className="w-full mt-4 text-base text-gray-800">
              <tbody>
                <tr>
                  <td className="font-semibold py-2">STATE</td>
                  <td className="font-semibold text-blue-700 py-2">{selectedState.stateName}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>{selectedState.total}</td>
                </tr>
                <tr>
                  <td>10th</td>
                  <td>{selectedState.tenth}</td>
                </tr>
                <tr>
                  <td>12th</td>
                  <td>{selectedState.twelfth}</td>
                </tr>
                <tr>
                  <td>ITI</td>
                  <td>{selectedState.iti}</td>
                </tr>
                <tr>
                  <td>DIPLOMA</td>
                  <td>{selectedState.diploma}</td>
                </tr>
                <tr>
                  <td>GRADUATION</td>
                  <td>{selectedState.graduation}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="md:w-2/5 p-8 space-y-6">
        {/* Main Stats */}
        <div className="bg-gradient-to-b from-blue-100 to-pink-100 rounded-2xl p-10 text-center font-extrabold text-4xl text-blue-900 shadow-lg">
          118K+<br />
          <span className="text-lg font-normal">Internship Opportunities</span>
        </div>

        {/* Smaller Info Boxes */}
        <div className="grid grid-cols-2 gap-8 text-center text-blue-900 font-extrabold">
          <div className="bg-gradient-to-b from-green-100 to-blue-100 rounded-xl p-6 text-3xl shadow-md">
            25<br />
            <span className="text-base font-normal">Sectors</span>
          </div>
          <div className="bg-gradient-to-b from-blue-100 to-purple-100 rounded-xl p-6 text-3xl shadow-md">
            36<br />
            <span className="text-base font-normal">States/UTS</span>
          </div>
          <div className="bg-gradient-to-b from-blue-100 to-gray-100 rounded-xl p-6 text-3xl shadow-md">
            734<br />
            <span className="text-base font-normal">Districts</span>
          </div>
          <div className="bg-gradient-to-b from-blue-100 to-yellow-100 rounded-xl p-6 text-3xl shadow-md">
            5<br />
            <span className="text-base font-normal">Qualifications</span>
          </div>
        </div>
      </div>
    </div>
  );
}
