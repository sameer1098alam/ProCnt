import Login from "./components/Auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Center from "./components/Layout/Center";
// import NotFound from "./components/NotFound"; // A simple 404 page

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <>
      <Navbar />
      <Center />
    </>,
  },
  // {
  //   path: "*", // This catches all undefined routes
  //   element: <NotFound />,
  // },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
