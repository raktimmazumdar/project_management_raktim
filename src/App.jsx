import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from "./pages/Login";
import { AdminDashboard } from "./pages/AdminDashboard";
import { EmployeeDashboard } from "./pages/EmployeeDashboard";

import { AppLayout } from "./layouts/AppLayout";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "admin",
            element: <AdminDashboard />,
          },
          {
            path: "employee",
            element: <EmployeeDashboard />,
          },
        ],
      },
    ],
    {
      basename: "/project_management_raktim",
    },
  );

  return <RouterProvider router={router} />;
}

export default App;
