import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/Urls";
import { useProtectedPage } from "../constants/useProtectPage";
import { useNavigate, useParams } from "react-router-dom";
import {
  DivButtonCriar,
  DivButtons,
  DivForm,
  MenuBarCreate,
} from "../css/createTripsCss";
import { Container } from "../css/homeCss";

export default function CreateTripPage() {
  useProtectedPage();
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };

  const goToBackPage = () => {
    navigate(-1);
  };
  const [form, setForm] = useState({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: undefined,
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const buttonCreate = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/trips/`, form, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        alert("Viagem Criada com sucesso!");
      })
      .catch((error) => {});
  };
  return (
    <Container>
      <MenuBarCreate>
        {" "}
        <h1>Criar Viagem</h1>
      </MenuBarCreate>
      <DivForm>
        <form onSubmit={buttonCreate}>
          <input
            placeholder="Nome"
            name="name"
            value={form.name}
            onChange={onChange}
          />
          <select name="planet" value={form.planet} onChange={onChange}>
            <option value="" data-default disabled selected={undefined}>
              Escolha um Planeta
            </option>
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Terra</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urano</option>
            <option>Netuno</option>
            <option>Plutão</option>
          </select>
          <input
            type={"date"}
            name="date"
            value={form.date}
            onChange={onChange}
          />
          <input
            placeholder="Descrição"
            name="description"
            value={form.description}
            onChange={onChange}
          />
          <input
            type={"number"}
            placeholder="Duração em dias"
            name="durationInDays"
            onChange={onChange}
            pattern="-?(\\d+|\\d{1,3}(\\.\\d{3})*)(,\\d+)? "
            min="50"
          />
          <br></br>

          <button>Criar</button>
        </form>
      </DivForm>
      <DivButtons>
        <div onClick={goToBackPage}>Voltar</div>
        <div onClick={goToHomePage}>Home</div>
      </DivButtons>
    </Container>
  );
}
