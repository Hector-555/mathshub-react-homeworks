import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import AnimalsA from "./pages/AnimalsA";
import AnimalsB from "./pages/AnimalsB";
import Clothes from "./pages/Clothes";
import Emotions from "./pages/Emotions";
import ActionsA from "./pages/ActionsA";
import ActionsB from "./pages/ActionsB";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "animals-1",
        element: <AnimalsA />,
      },
      {
        path: "animals-2",
        element: <AnimalsB />,
      },
      {
        path: "clothes",
        element: <Clothes />,
      },
      {
        path: "emotions",
        element: <Emotions />,
      },
      {
        path: "actions-1",
        element: <ActionsA />,
      },
      {
        path: "actions-2",
        element: <ActionsB />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
