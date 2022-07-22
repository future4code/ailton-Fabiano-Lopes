import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/Urls";
import { useProtectedPage } from "../constants/useProtectPage";
import { useNavigate, useParams } from "react-router-dom";
import {
  CardDetail,
  ContainerDetail,
  DivButtonsDetail,
} from "../css/TripDetailCss";

export const TripDetails = () => {
  useProtectedPage();
  const goToHomePage = () => {
    navigate("/");
  };

  const goToBackPage = () => {
    navigate(-1);
  };
  const [tripState, setTripState] = useState({});
  const pathParams = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${BASE_URL}/trip/${pathParams.id} `, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((response) => {
        setTripState(response.data.trip);
      })
      .catch((error) => {});
  }, []);

  const aproveCandidate = (id, boolean) => {
    const body = {
      approve: boolean,
    };
    axios
      .put(`${BASE_URL}/trips/${pathParams.id}/candidates/${id}/decide`, body, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((response) => {})
      .catch((error) => {});
  };

  return (
    <ContainerDetail>
      <h1>Detalhes da viagem!!!</h1>
      <div key={tripState.id}>
        <CardDetail>
          {" "}
          <p> Nome: {tripState.name}</p>
          <p>Planeta: {tripState.planet}</p>
          <p>Descrição: {tripState.description}</p>
          <p>Data: {tripState.date}</p>
          <p>Duração: {tripState.durationInDays} dias</p>
        </CardDetail>
        {tripState.candidates?.map((candidate) => {
          return (
            <div key={candidate.id}>
              <p>Nome: {candidate.name}</p>
              <button onClick={() => aproveCandidate(candidate.id, true)}>
                Aprovar
              </button>
              <button onClick={() => aproveCandidate(candidate.id, false)}>
                reprovar
              </button>
            </div>
          );
        })}
      </div>
      <div>
        {tripState.approved?.map((travel) => {
          return <div>{travel.name} </div>;
        })}{" "}
      </div>
      <DivButtonsDetail>
        <div onClick={goToBackPage}>Voltar</div>
        <div onClick={goToHomePage}>Home</div>
      </DivButtonsDetail>
    </ContainerDetail>
  );
};
