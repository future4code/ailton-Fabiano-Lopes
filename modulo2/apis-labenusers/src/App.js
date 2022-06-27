import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Component } from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 1fr);
  align-items: center;
`;

const DivInput = styled.div`
  grid-area: 2/2/4/3;
  width: 28vw;
  height: 28vh;
  flex-direction: column;
  background: grey;
  border: 2px solid black;
  border-radius: 100px;
  padding: 5px;
  text-align: center;
  padding: 50px;
  margin: 0;
  opacity: 85%;

  input {
    width: 16vw;
    margin: 0;
  }
`;
const DivButton = styled.div`
  Button {
    :hover {
      background: blue;
      color: white;
      transition: 0.5s;
      border-radius: 5px;
    }
    border-radius: 5px;
  }
  grid-area: 2/2/3/3;
  justify-items: center;
  margin-left: 50px;
  margin-top: 16px;
`;
const listaDiv = styled.div``;
class Tela1 extends Component {
  state = {
    nome: "",
    eMail: "",
  };
  onchangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };
  onchangeEMail = (event) => {
    this.setState({ eMail: event.target.value });
  };

  createAdd = () => {
    const body = {
      name: this.state.nome,
      email: this.state.eMail,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "fabiano-lopes-ailton",
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert("Usuário Adicionado");
      })
      .catch((error) => {
        console.log(error.message);
      });
    this.setState({
      nome: "",
      eMail: "",
    });
  };
  render() {
    return (
      <Container>
        <DivInput>
          <h2> LabeUsers</h2>
          Nome: <input
            onChange={this.onchangeNome}
            value={this.state.nome}
          />{" "}
          <br />
          e-mail:{" "}
          <input onChange={this.onchangeEMail} value={this.state.eMail} />
          <DivButton>
            <button onClick={this.createAdd}>Adicionar</button>
            <button onClick={this.props.mudaTela2}>Lista de Usuários</button>
          </DivButton>
        </DivInput>
      </Container>
    );
  }
}

export class Tela2 extends Component {
  state = {
    listaUser: [],
  };

  componentDidMount() {
    this.getListaUser();
  }
  componentDidUpdate() {
    this.getListaUser();
  }
  getListaUser = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "fabiano-lopes-ailton",
          },
        }
      )
      .then((response) => {
        this.setState({ listaUser: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  getListaUserDelete = (id) => {
    console.log(id);
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      { headers: { Authorization: "fabiano-lopes-ailton" } }
    );
  };
  render() {
    return (
      <div>
        <div>
          {" "}
          {this.state.listaUser.map((listaUser) => {
            return (
              <div key={listaUser.id}>
                {" "}
                {listaUser.name}{" "}
                <button onClick={() => this.getListaUserDelete(listaUser.id)}>
                  X
                </button>{" "}
              </div>
            );
          })}
        </div>
        <button onClick={this.props.mudaTela1}>Voltar</button>
      </div>
    );
  }
}
export default class App extends React.Component {
  state = {
    escolheTela: "tela1",
  };
  mudaTela1 = () => {
    this.setState({ escolheTela: "tela1" });
  };
  mudaTela2 = () => {
    this.setState({ escolheTela: "tela2" });
  };

  mudarTela = () => {
    switch (this.state.escolheTela) {
      case "tela1":
        return <Tela1 mudaTela2={this.mudaTela2} />;
        break;

      case "tela2":
        return <Tela2 mudaTela1={this.mudaTela1} />;
        break;
    }
  };
  render() {
    return <div>{this.mudarTela()}</div>;
  }
}
