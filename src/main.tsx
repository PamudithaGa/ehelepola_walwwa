import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import './style/fonts.css'
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router";

// Pages
import PrisonArcade from "./pages/PrisonArcade.tsx";
import WaxMuseum from "./pages/WaxMuseum.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import CourtYard from "./pages/CourtYard.tsx";
import KingsCourt from "./pages/KingsCourt.tsx";
import ContactUsTwo from "./pages/ContactUsTwo.tsx";


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
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/ContactUsTwo",
    element: <ContactUsTwo />,
  },
  {
    path: "/kingscourt",
    element: <KingsCourt />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
