import React from "react";

const feeSchedule = [
  { service: "Sick Note/Drs Letter", cost: "$25 - $50" },
  { service: "Form Completion (varies on forms)", cost: "$40 - $80" },
  { service: "Driver’s Medical Exam", cost: "$125 - $200" },
  { service: "Non-OHIP Visit", cost: "$100 - $160" },
  { service: "TB Test", cost: "$40 - $60" },
  { service: "TB Read", cost: "$20 - $40" },
  { service: "Attending Physician Statement", cost: "$50 - $150" },
  { service: "Prescription for Massage/Physio", cost: "$30 - $50" },
  { service: "Chiropractic/Orthotics/Stockings Form", cost: "$30 - $60" },
  { service: "CRA Tax Credit Form", cost: "$45 - $85" },
  { service: "Daycare Note", cost: "$25 - $50" },
  { service: "Long Term Disability Form", cost: "$100 - $150" },
  { service: "Short-Term Disability Form", cost: "$60 - $100" },
  { service: "Disability Tax Credit Form", cost: "$85 - $120" },
  { service: "MTO Physical & Form", cost: "$120 - $180" },
  { service: "Immunization Form", cost: "$25 - $50" },
  { service: "Medical Records Request", cost: "$50 - $100" },
  { service: "Chart Copy (First 20 pages)", cost: "$0.25 per page after 20" },
  { service: "Ear Flushing (Per Side)", cost: "$30 - $50 per side" },
  { service: "FAF Form", cost: "$40 - $80" },
  { service: "Warts/Skin Tags (1-3)", cost: "$10 - $30" },
  { service: "Warts/Skin Tags (4-5)", cost: "$50 - $80" },
  { service: "No-Show Fee", cost: "$40 - $80" },
];

const Index = () => {
  return (
    <div className="padding-x py-[150px]">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Uninsured Services Fee Schedule
      </h2>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Prices may vary based on complexity and additional requirements.
      </p>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-left">
              Service
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Cost Range
            </th>
          </tr>
        </thead>
        <tbody>
          {feeSchedule.map((item, index) => (
            <tr
              key={index}
              className="odd:bg-white even:bg-gray-100 text-[14px] md:text-[16px]"
            >
              <td className="border border-gray-300 px-1 md:px-4 py-1 md:py-2">
                {item.service}
              </td>
              <td className="border border-gray-300 px-1 md:px-4 py-1 md:py-2">
                {item.cost}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
