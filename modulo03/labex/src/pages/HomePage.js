import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const goToListTripsPage = () => {
    navigate("/Trips/list");
  };
  const goToLoginPage = () => {
    navigate("/Login");
  };
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={goToListTripsPage}>Viagens</button>
      <button onClick={goToLoginPage}>Área Admin</button>
    </div>
  );
}
