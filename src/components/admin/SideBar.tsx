// components/admin/Sidebar.tsx
import { Link } from "react-router-dom";
import { LayoutDashboard, Calendar, Users, ClipboardList } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <div className="p-4 font-bold text-lg border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <Link to="/admin/dashboard" className="flex items-center gap-2 hover:text-primary">
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        <Link to="/admin/calendar" className="flex items-center gap-2 hover:text-primary">
          <Calendar size={20} /> Calendar
        </Link>
        <Link to="/admin/reservations" className="flex items-center gap-2 hover:text-primary">
          <ClipboardList size={20} /> Reservations
        </Link>
        <Link to="/admin/staff" className="flex items-center gap-2 hover:text-primary">
          <Users size={20} /> Staff
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
