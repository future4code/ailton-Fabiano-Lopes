import axios from "axios";
import { BASE_URL } from "../constants/Urls";
import { useProtectedPage } from "../constants/useProtectPage";
import { useNavigate, useParams } from "react-router-dom";
import { useRequestData } from "../Hook/useRequestData";

export default function Admin() {
  useProtectedPage();
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
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
        console.log(response);
        alert("Viagem deletada com sucesso!");
        // trips();
      })
      .catch((error) => alert(error.response.data.message));
  };

  return (
    <div>
      <h1> AdminHomePage</h1>{" "}
      <div>
        {Travel &&
          Travel.map((trip) => {
            return (
              <div onClick={() => goToTripDetail(trip.id)} key={trip.id}>
                {trip.name}
                <button onClick={() => buttonExcluir(trip.id)}>Excluir</button>
              </div>
            );
          })}
      </div>
      <button onClick={goToBackPage}>voltar</button>
      <button onClick={goToHomePage}>Home</button>
      <button onClick={goToCreateTrips}>Criar Viagem</button>
    </div>
  );
}
