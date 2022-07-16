import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/Urls";
export default function Login(props) {
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const goToBackPage = () => {
    navigate(-1);
  };
  const inputEmail = (event) => {
    setInputEmailValue(event.target.value);
  };
  const inputPassword = (event) => {
    setInputPasswordValue(event.target.value);
  };

  const buttonLogin = (event) => {
    console.log(inputPasswordValue, inputEmailValue);
    event.preventDefault();
    const body = {
      email: inputEmailValue,
      password: inputPasswordValue,
    };
    axios
      .post(`${BASE_URL}/login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log("Deu certo", response.data.token);
        navigate("/admin");
      })
      .catch((error) => {
        alert("Usuário inexistente");
        console.log(error, "deu ruim");
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={buttonLogin}>
        <input
          type={"email"}
          value={inputEmailValue}
          onChange={inputEmail}
          placeholder="e-mail"
          required
        />
        <input
          type={"password"}
          placeholder="senha"
          onChange={inputPassword}
          value={inputPasswordValue}
          required
        />
        <button>Login</button>
        <br />
      </form>
      <button onClick={goToBackPage}>voltar</button>
      <button onClick={goToHomePage}>Home</button>
    </div>
  );
}
