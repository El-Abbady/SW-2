import { Navigate, createBrowserRouter, } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import App from "./App";
import Stations from "./components/Stations";
import Destination from "./components/user_destination";
import BookingForm from "./pages/booking/BookingForm";
import Addbus from "./pages/admin/Addbus";
import Feedback from "../src/pages/FeedBack/feedback"
import { Buses } from "./pages/admin/Buses";
export const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/allbuses",
        element: <Buses />,
      },
      
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/stations",
        element: <Stations />,
      },
      {
        path: "/desinations",
        element: <Destination />,
      },
      {
        path: "/user_destination",
        element: <user_Destination />,
      },
      {
        path: "/booking",
        element: <BookingForm />,
      },
      {
        path: "/addbus",
        element: <Addbus />,
      },
      {
        path: "/FeedBack",
        element: <Feedback />,
      },
    ]
  },
  {
    path: "*",
    element: <Navigate to={'/'} />,
  },
]);