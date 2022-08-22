import { useState } from "react";
import axios from "axios";
import {
  InputDivRegister,
  InputBoxRegister,
  ContainerRegister,
  Img1,
  Img2,
  Img3,
  Img4,
  ButtonEntrar,
  HeaderDiv,
} from "./registerPageCss";
import { baseURL } from "../../components/url/url";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/");
  };

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const buttonCreateRegister = (event) => {
    event.preventDefault();
    const body = {
      username: form.username,
      email: form.email,
      password: form.password,
    };
    axios
      .post(`${baseURL}users/signup`, body)
      .then((response) => {
        alert("Usuário Criado");
      })
      .catch((error) => {
        alert("Usário Existente, ou errado");
      });
  };
  return (
    <ContainerRegister>
      <HeaderDiv>
        <Img1></Img1>
        <Img2></Img2>
        <Img3></Img3>
        <Img4></Img4>
        <ButtonEntrar onClick={goToLogin}>Entrar</ButtonEntrar>
      </HeaderDiv>
      <h1>Olá Boas Vindas ao LabEddit ;)</h1>{" "}
      <InputDivRegister onSubmit={buttonCreateRegister}>
        <InputBoxRegister
          placeholder="Nome de usuário"
          required
          name="username"
          value={form.username}
          onChange={onChange}
        />
        <InputBoxRegister
          type="email"
          placeholder="e-mail"
          required
          name="email"
          value={form.email}
          onChange={onChange}
        />
        <InputBoxRegister
          type="password"
          placeholder="senha"
          required
          name="password"
          value={form.password}
          onChange={onChange}
        />
        <p>
          Ao continuar, você concorda com o nosso contrato de usuários e nossa
          Política de Provacidades
        </p>
        <input type="checkbox" required />
        <label>
          {" "}
          Eu Concordo em receber e-mails sobre coisas legais no LabEddit
        </label>
        <button>Cadastrar</button>
      </InputDivRegister>
    </ContainerRegister>
  );
}
