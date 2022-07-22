import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/Urls";
import { listCountries } from "../constants/listCountries";
import { useRequestData } from "../Hook/useRequestData";
import {
  ContainerApplication,
  DivButtonsApplication,
  DivFormApplication,
} from "../css/applicationCss";
export default function Aplication() {
  const [Travel] = useRequestData(`${BASE_URL}/trips`);
  const navigate = useNavigate();
  const goToBackPage = () => {
    navigate(-1);
  };
  const goToHomePage = () => {
    navigate("/");
  };
  const [form, setForm] = useState({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: "",
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const createCandidate = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/trips/${form.trip}/apply`, form, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        alert("Parabéns você se candidatou para essa viagem");
      })
      .catch((error) => {});
  };

  return (
    <ContainerApplication>
      <h1>Candidatura</h1>
      <DivFormApplication>
        <form onSubmit={createCandidate}>
          <select onChange={onChange} value={form.country} name="country">
            <option value="" data-default disabled selected={undefined}>
              Escolha um País
            </option>
            {listCountries.map((country) => {
              return <option key={country}> {country} </option>;
            })}
          </select>
          <br />
          <input
            placeholder="Nome"
            onChange={onChange}
            value={form.name}
            name="name"
          />
          <br />
          <input
            type={"number"}
            placeholder="Idade"
            onChange={onChange}
            value={form.age}
            name="age"
          />
          <br />
          <input
            placeholder="Texto de Candidatura"
            onChange={onChange}
            value={form.applicationText}
            name="applicationText"
          />
          <br />
          <input
            placeholder="Profissão"
            onChange={onChange}
            value={form.profession}
            name="profession"
          />
          <br />
          <select onChange={onChange} value={form.trip} name="trip">
            <option value="" data-default disabled selected={undefined}>
              Escolha um Planeta
            </option>
            {Travel?.map((trip) => {
              return (
                <option value={trip.id} key={trip.id}>
                  {" "}
                  {trip.name}
                </option>
              );
            })}
          </select>
          <br />
          <button>Candidatar</button>
        </form>
      </DivFormApplication>
      <DivButtonsApplication>
        <div onClick={goToHomePage}>Home</div>
        <div onClick={goToBackPage}>voltar</div>
      </DivButtonsApplication>
    </ContainerApplication>
  );
}
