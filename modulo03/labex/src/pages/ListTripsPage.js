import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../Hook/useRequestData";
import { BASE_URL } from "../constants/Urls";
export default function ListTrips() {
  const [Travel, isLoading, error] = useRequestData(`${BASE_URL}/trips`);

  const navigate = useNavigate();
  const goToBackPage = () => {
    navigate(-1);
  };

  const goToAplicationPage = () => {
    navigate("/Trips/Aplication");
  };
  const listTravel =
    Travel &&
    Travel.map((trip) => {
      return (
        <div key={trip.id}>
          <strong> Nome: </strong> {trip.name}
          <strong> Descrição: </strong> {trip.description}
          <strong> Planeta: </strong>
          {trip.planet}
          <strong> Duração: </strong>
          {trip.durationInDays} dias
          <strong> Data: </strong>
          {trip.date}{" "}
        </div>
      );
    });
  return (
    <div>
      <button onClick={goToBackPage}>voltar</button>
      <button onClick={goToAplicationPage}>Inscrever</button>
      <h1>TravelsPage</h1>
      <div>
        {" "}
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>{error.message}</p>}
        {!isLoading && Travel && Travel.length > 0 && listTravel}
        {!isLoading && Travel && Travel.length === 0 && (
          <p>Não existe viagens neste momento</p>
        )}{" "}
      </div>
    </div>
  );
}
