import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import ChecklistPage from "./ChecklistPage.tsx";

const router = createBrowserRouter([{
    path: "/",
    element: <ChecklistPage/>,
},
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
