import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import ListTrips from "../pages/ListTripsPage";
import Admin from "../pages/AdminHomePage";
import { Error } from "../pages/ErrorPage";
import Aplication from "../pages/ApplicationFormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TripDetails } from "../pages/TripDetailsPage";
import CreatePage from "../pages/CreateTripPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="Trips/list" element={<ListTrips />} />
        <Route path="admin" element={<Admin />} />
        <Route path="error" element={<Error />} />
        <Route path="Trips/Aplication" element={<Aplication />} />
        <Route path="admin/trips/" element={<TripDetails />} />
        <Route path="/admin/trips/create" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  );
};
