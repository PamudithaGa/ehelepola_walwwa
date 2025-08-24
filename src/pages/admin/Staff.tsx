import React from "react";

const Staff: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold my-6">Staff Directory</h2>

      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Role</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Phone Number</th>
            <th className="px-4 py-2 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-b">Alice Smith</td>
            <td className="px-4 py-2 border-b">Coordinator</td>
            <td className="px-4 py-2 border-b">alice@example.com</td>
            <td className="px-4 py-2 border-b">+1234567891</td>
            <td className="px-4 py-2 border-b text-green-600 font-semibold">
              Active
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Staff;
