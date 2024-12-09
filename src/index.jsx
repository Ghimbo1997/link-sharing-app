import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLoginPage from "./pages/auth-login";
import AuthRegisterPage from "./pages/auth-register";

const router = createBrowserRouter([
  {
    path: "/auth",
    children: [
      {
        path: "/auth/login",
        Component: AuthLoginPage,
      },
      {
        path: "/auth/register",
        Component: AuthRegisterPage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
