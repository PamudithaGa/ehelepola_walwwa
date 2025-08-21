// src/pages/ReservationList.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Reservation {
  reservationId: number;
  schoolName: string;
  contactPerson: string;
  contactNumber: string;
  emailAddress: string;
  studentCount: number;
  staffCount: number;
  date: string;
  timeSlot: string | null;
  status: string;
  amount: number;
}

const ReservationList: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await axios.get("/api/reservations");
        setReservations(res.data);
      } catch (err: any) {
        setError("Failed to fetch reservations.");
      } finally {
        setLoading(false);
      }
    };
    fetchReservations();
  }, []);

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        All Reservations
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs uppercase bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">School</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Time Slot</th>
              <th className="px-4 py-3">Students</th>
              <th className="px-4 py-3">Staff</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r) => (
              <tr key={r.reservationId} className="border-b">
                <td className="px-4 py-3">{r.reservationId}</td>
                <td className="px-4 py-3">{r.schoolName}</td>
                <td className="px-4 py-3">
                  {r.contactPerson} <br />
                  <span className="text-xs text-gray-500">
                    {r.contactNumber}
                  </span>
                </td>
                <td className="px-4 py-3">{r.date}</td>
                <td className="px-4 py-3">{r.timeSlot}</td>
                <td className="px-4 py-3">{r.studentCount}</td>
                <td className="px-4 py-3">{r.staffCount}</td>
                <td className="px-4 py-3">Rs. {r.amount}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      r.status === "confirmed"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Link
                    to={`/reservations/${r.reservationId}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationList;
