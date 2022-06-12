import styled from "styled-components";
import React from "react";
import ImgCarta from "./img/whatsapp.png";
import Mensagem from "./componentes/Mensagem";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(15, 1fr);
  height: 100vh;
`;

const Header = styled.div`
  grid-area: 1/2/2/6;
  background-color: rgba(0, 168, 132, 255);
  text-align: center;
  color: beige;
`;

const CorpoWhatsEu = styled.div`
  border-radius: 10px;
`;
const CorpoWhatsOutros = styled.div`
  display: flex;
  margin-right: auto;
  border-radius: 10px;
`;
const CorpoWhats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
  background-color: #f8f8f8;
  grid-area: 2/3/15/6;
  color: blue;
  border: 1px solid black;
  overflow: auto;
`;
const InputWhats = styled.div`
  background-color: #f0f2f5;
  grid-area: 15/3/16/6;
  border: 1px solid black;
`;
const Usuarios = styled.div`
  background-color: #daf7f3;
  grid-area: 2/2/16/3;
  border: 1px solid black;
`;

const ImgPictures = styled.img`
  background-color: rgba(0, 168, 132, 255);
  width: 40px;
`;
const UsuarioDiv = styled.div`
  :hover {
    background-color: aquamarine;
  }
  width: 90px;
  text-align: center;
  margin-top: 8px;
  margin-left: 26%;
  border-radius: 10px;
`;
const InputMensagem = styled.input`
  width: 32vw;
  margin: 0px 8px;
  border-radius: 6px;
  background-color: #f0f2f5;
  height: 4vh;
`;
const InputUsuario = styled.input`
  background-color: #f0f2f5;
  width: 10vw;
  height: 4vh;
  border-radius: 6px;
`;
const ButtonEnviar = styled.button`
  :hover {
    background-color: palevioletred;
    transition: 0.3s;
  }
  border-radius: 6px;
`;

class App extends React.Component {
  state = {
    post: [],
    mensagem: "",
    usuario: "",
    usuarioLeft: "",
  };

  newPost = () => {
    const addMensagem = [...this.state.post];
    addMensagem.push({
      mensagem: this.state.mensagem,
      usuario: this.state.usuario,
    });
    this.setState({
      post: [...addMensagem],
    });
    this.setState({ mensagem: "" });
    this.setState({ usuario: "" });
  };

  onchangeMensagem = (event) => {
    this.setState({ mensagem: event.target.value });
  };
  onchangeUsuario = (event) => {
    this.setState({ usuario: event.target.value });
  };

  render() {
    const MsnUser = this.state.post.map((item, index) => {
      if (item.usuario === "eu" || item.usuario === "Eu") {
        return (
          <CorpoWhatsEu>
            {" "}
            <Mensagem
              usuario={item.usuario}
              mensagem={item.mensagem}
              key={index}
            />
          </CorpoWhatsEu>
        );
      } else {
        return (
          <CorpoWhatsOutros>
            <Mensagem
              usuario={item.usuario}
              mensagem={item.mensagem}
              key={index}
            />
          </CorpoWhatsOutros>
        );
      }
    });
    return (
      <MainContainer>
        <Header>
          <h1>
            {" "}
            <ImgPictures src={ImgCarta} />
            WhatsLab
          </h1>
        </Header>
        <CorpoWhats>{MsnUser}</CorpoWhats>
        <InputWhats>
          <InputUsuario
            placeholder="Usuário"
            value={this.state.usuario}
            onChange={this.onchangeUsuario}
          />
          <InputMensagem
            placeholder="Mensagem"
            value={this.state.mensagem}
            onChange={this.onchangeMensagem}
          />
          <ButtonEnviar onClick={this.newPost}>Enviar</ButtonEnviar>
        </InputWhats>
        <Usuarios>
          <UsuarioDiv
            onClick={this.userLeft}
            className="usuarioEsquerda"
            value="Maria"
          >
            Maria
          </UsuarioDiv>
          <UsuarioDiv>João</UsuarioDiv>
          <UsuarioDiv>Gustavo</UsuarioDiv>
          <UsuarioDiv>Mateus</UsuarioDiv>
          <UsuarioDiv>João Pedro</UsuarioDiv>
          <UsuarioDiv>Eduardo</UsuarioDiv>
        </Usuarios>
      </MainContainer>
    );
  }
}
export default App;
