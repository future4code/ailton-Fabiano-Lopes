import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../components/url/url";
import axios from "axios";
import {
  BarraLogin,
  ContainerLogin,
  Img1Login,
  InputDiv,
  RegisteButton,
  TitlteLogin,
} from "./loginPageCss";

export default function Login() {
  const navigate = useNavigate();
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const goToRegisterPage = () => {
    navigate("register");
  };
  const ButtonLogin = (event) => {
    event.preventDefault();
    const body = {
      email: inputEmailValue,
      password: inputPasswordValue,
    };
    axios
      .post(`${BASE_URL}/users/login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log("Deu certo", response.data.token);
        navigate("feeds");
      })
      .catch((error) => {
        alert("Usuário não existe");
      });
  };
  const inputEmail = (event) => {
    setInputEmailValue(event.target.value);
  };
  const inputPassword = (event) => {
    setInputPasswordValue(event.target.value);
  };
  return (
    <ContainerLogin>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <h1>LabEddit</h1>
      <h3>O projeto de rede social da Labenu</h3>
      <InputDiv onSubmit={ButtonLogin}>
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
        <button>Continuar</button>
      </InputDiv>
      <BarraLogin></BarraLogin>
      <RegisteButton onClick={goToRegisterPage}>Crie Uma conta</RegisteButton>
    </ContainerLogin>
  );
}
