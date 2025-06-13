import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import ChecklistPage from "./pages/checklistPage/ChecklistPage.tsx";
import SignInPage from "./pages/signInPage/SignInPage.tsx";

const router = createBrowserRouter([
  {
    path: "/checklist",
    element: <ChecklistPage />,
  },
  {
    path: "/",
    element: <SignInPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
