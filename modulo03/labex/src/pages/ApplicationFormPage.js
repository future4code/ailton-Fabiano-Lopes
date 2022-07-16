import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/Urls";
import { listCountries } from "../constants/listCountries";
import { useRequestData } from "../Hook/useRequestData";
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
    age: 0,
    applicationText: "",
    profession: "",
    country: "",
    trip: "",
  });
  const onChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const createCandidate = (id) => {
    axios.post(`${BASE_URL}/trips/${id}/apply`, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    });
  };

  return (
    <div>
      <h1>Candidatura</h1>
      <form onSubmit={createCandidate}>
        <select onChange={onChange} value={form.country} name="country">
          <option value="" data-default disabled selected={undefined}>
            Escolha um País
          </option>
          {listCountries.map((country) => {
            return <option key={country}> {country} </option>;
          })}
        </select>

        <input
          placeholder="Nome"
          onChange={onChange}
          value={form.name}
          name="name"
        />
        <input
          type={"number"}
          placeholder="Idade"
          onChange={onChange}
          value={form.age}
          name="age"
        />
        <input
          placeholder="Texto de Candidatura"
          onChange={onChange}
          value={form.applicationText}
          name="applicationText"
        />
        <input
          placeholder="Profissão"
          onChange={onChange}
          value={form.profession}
          name="profession"
        />
        <select onChange={onChange} value={form.trip} name="trip">
          <option value="" data-default disabled selected={undefined}>
            Escolha um Planeta
          </option>
          {Travel?.map((trip) => {
            return <option key={trip.id}> {trip.name}</option>;
          })}
        </select>
        <button>Candidatar</button>
      </form>
      <button onClick={goToHomePage}>Home</button>
      <button onClick={goToBackPage}>voltar</button>
    </div>
  );
}
