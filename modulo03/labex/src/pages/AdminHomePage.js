import axios from "axios";
import { BASE_URL } from "../constants/Urls";
import { useProtectedPage } from "../constants/useProtectPage";
import { useNavigate, useParams } from "react-router-dom";
import { useRequestData } from "../Hook/useRequestData";
import {
  CardTrip,
  ContainerAdmin,
  DivButtons,
  DivCard,
} from "../css/adminHomeCss";

export default function Admin() {
  useProtectedPage();
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };

  const goToLogout = () => {
    localStorage.clear("token");
    navigate("/login");
  };
  const goToBackPage = () => {
    navigate(-1);
  };

  const goToCreateTrips = () => {
    navigate("/admin/trips/create");
  };
  const goToTripDetail = (id) => {
    navigate(`/admin/trip/${id}`);
  };
  const [Travel] = useRequestData(`${BASE_URL}/trips`);

  const buttonExcluir = (id, trips) => {
    axios
      .delete(`${BASE_URL}/trips/${id}`, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((response) => {
        alert("Viagem deletada com sucesso!");
      })
      .catch((error) => alert(error.response.data.message));
  };

  return (
    <ContainerAdmin>
      <h1>
        {" "}
        Painel Administra<a>tivo</a>
      </h1>{" "}
      <DivCard>
        {Travel &&
          Travel.map((trip) => {
            return (
              <CardTrip key={trip.id}>
                <p onClick={() => goToTripDetail(trip.id)}> {trip.name}</p>
                <button onClick={() => buttonExcluir(trip.id)}>Excluir</button>
              </CardTrip>
            );
          })}
      </DivCard>
      <DivButtons>
        <div onClick={goToBackPage}>voltar</div>
        <div onClick={goToHomePage}>Home</div>
        <div onClick={goToCreateTrips}>Criar Viagem</div>
        <div
          onClick={() => {
            goToLogout();
          }}
        >
          logout
        </div>
      </DivButtons>
    </ContainerAdmin>
  );
}
