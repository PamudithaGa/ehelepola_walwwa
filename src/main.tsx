import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import "./index.css";
import "./style/fonts.css";
import App from "./App.tsx";

// Pages
import PrisonArcade from "./pages/PrisonArcade.tsx";
import WaxMuseum from "./pages/WaxMuseum.tsx";
import CourtYard from "./pages/CourtYard.tsx";
import KingsCourt from "./pages/KingsCourt.tsx";
import ContactUsTwo from "./pages/ContactUsTwo.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import StudentReservation from "./pages/StudentReservation.tsx";
import Blogs from "./pages/Blogs.tsx";
import Success from "./components/reservation/Success.tsx";
import Cancel from "./components/reservation/Cancel.tsx";
import Admin from "./pages/admin/Admin.tsx";
import FAQ from "./pages/FAQ.tsx";

// Admin pages
import AdminLogin from "./pages/admin/AdminLogin.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import Calendar from "./pages/admin/Calendar.tsx";
import Reservations from "./pages/admin/Reservations.tsx";
import Staff from "./pages/admin/Staff.tsx";

// Layouts
import AdminLayout from "./components/admin/AdminLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/PrisonArcade",
    element: <PrisonArcade />,
  },
  {
    path: "/courtyard",
    element: <CourtYard />,
  },
  {
    path: "/WaxMuseum",
    element: <WaxMuseum />,
  },
  {
    path: "/reservation",
    element: <StudentReservation />,
  },
  {
    path: "/ContactUs",
    element: <ContactUsTwo />,
  },
  {
    path: "/kingscourt",
    element: <KingsCourt />,
  },

  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },

  {
    path: "/FAQ",
    element: <FAQ />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/cancel",
    element: <Cancel />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/adminLogin",
    element: <AdminLogin />,
  },

  // Admin routes
  { path: "/admin/login", element: <AdminLogin /> },
  {
    path: "/admin",
    element: <AdminLayout />, // Wraps all child admin pages
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "calendar", element: <Calendar /> },
      { path: "reservations", element: <Reservations /> },
      { path: "staff", element: <Staff /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
