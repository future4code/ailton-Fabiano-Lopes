import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/Urls";
import { useProtectedPage } from "../constants/useProtectPage";
import { useNavigate, useParams } from "react-router-dom";

export const TripDetails = () => {
  useProtectedPage();
  const [tripState, setTripState] = useState({});
  const pathParams = useParams();
  const navigate = useNavigate();
  console.log(pathParams);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/trip/${pathParams.id} `, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((response) => {
        setTripState(response.data.trip);
        console.log(response.data.trip);
      })
      .catch((error) => {
        console.log("deu ruim", error);
      });
  }, []);
  return (
    <div>
      <h1>Detalhes da viagem!!!</h1>
      <div key={tripState.id}>
        Nome: {tripState.name} {tripState.planet}{" "}
      </div>
    </div>
  );
};
