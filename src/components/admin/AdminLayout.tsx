// components/layout/AdminLayout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar stays */}
      <Sidebar />

      {/* Page content changes based on route */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
