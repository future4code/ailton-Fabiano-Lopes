import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../Hook/useRequestData";
import { BASE_URL } from "../constants/Urls";
import loadinImg from "../img/loading.gif";
import { Container } from "../css/homeCss";
import {
  DivButtonsList,
  ListDiv,
  ListTravel,
  MenuBarList,
} from "../css/listTripCss";
export default function ListTrips() {
  const [Travel, isLoading, error] = useRequestData(`${BASE_URL}/trips`);

  const navigate = useNavigate();
  const goToBackPage = () => {
    navigate(-1);
  };

  const goToAplicationPage = () => {
    navigate("/Trips/Aplication/:id");
  };
  const listTravel =
    Travel &&
    Travel.map((trip) => {
      return (
        <ListTravel key={trip.id}>
          <strong> Nome: </strong> {trip.name}
          <strong> Descrição: </strong> {trip.description}
          <strong> Planeta: </strong>
          {trip.planet}
          <strong> Duração: </strong>
          {trip.durationInDays} dias
          <strong> Data: </strong>
          {trip.date}{" "}
        </ListTravel>
      );
    });
  return (
    <Container>
      <MenuBarList>
        <h1>Viagens</h1>
      </MenuBarList>
      <ListDiv>
        {" "}
        {isLoading && <img src={loadinImg} />}
        {!isLoading && error && <p>{error.message}</p>}{" "}
        {!isLoading && Travel && Travel.length > 0 && listTravel}
        {!isLoading && Travel && Travel.length === 0 && (
          <p>Não existe viagens neste momento</p>
        )}{" "}
      </ListDiv>
      <DivButtonsList>
        <div onClick={goToBackPage}>voltar</div>
        <div onClick={goToAplicationPage}>Inscrever</div>
      </DivButtonsList>
    </Container>
  );
}
