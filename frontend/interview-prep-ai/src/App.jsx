import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// import Login from "./pages/Auth/Login";
// import SignUp from "./pages/Auth/SignUp";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Home/Dashboard";
import InterviewPrep from "./pages/InterviewPrep/InterviewPrep";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/signUp',
//     element: <SignUp />
//   },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/interview-prep/:sessionId',
    element: <InterviewPrep />
  }
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </>
  );
}


