import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./style/fonts.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router";

// Pages
import PrisonArcade from "./pages/PrisonArcade.tsx";
import WaxMuseum from "./pages/WaxMuseum.tsx";
import CourtYard from "./pages/CourtYard.tsx";
import KingsCourt from "./pages/KingsCourt.tsx";
import ContactUsTwo from "./pages/ContactUsTwo.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import StudentReservation from "./pages/StudentReservation.tsx";
import Blogs from "./pages/Blogs.tsx";


import FAQ from "./pages/FAQ.tsx";
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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
