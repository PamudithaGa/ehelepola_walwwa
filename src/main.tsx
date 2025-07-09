import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router";

// Pages
import PrisonArcade from "./pages/PrisonArcade.tsx";
import WaxMuseum from "./pages/WaxMuseum.tsx";

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
    path: "/WaxMuseum",
    element: <WaxMuseum/>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
