import React from "react";

const Reservations: React.FC = () => {
  return (
    <div className="flex ">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b">Date</th>
            <th className="px-4 py-2 border-b">Time Slot</th>
            <th className="px-4 py-2 border-b">School</th>
            <th className="px-4 py-2 border-b">Number of Students</th>
            <th className="px-4 py-2 border-b">Contact Person</th>
            <th className="px-4 py-2 border-b">Contact Number</th>
            <th className="px-4 py-2 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-b">2023-10-15</td>
            <td className="px-4 py-2 border-b">10:00 AM - 12:00 PM</td>
            <td className="px-4 py-2 border-b">Springfield High</td>
            <td className="px-4 py-2 border-b">30</td>
            <td className="px-4 py-2 border-b">John Doe</td>
            <td className="px-4 py-2 border-b">+1234567890</td>
            <td className="px-4 py-2 border-b text-green-600 font-semibold">
              Confirmed
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reservations;
