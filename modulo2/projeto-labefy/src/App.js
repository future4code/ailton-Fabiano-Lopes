import React from "react";
import styled from "styled-components";
import axios from "axios";
import CardMusicas from "./componentes/CardMusicas";
import MenuComponent from "./componentes/Menu";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  background: black;
  color: white;
`;
const Menu = styled.div`
  grid-area: 1/1/2/3;
  text-align: center;
`;
const BarraLateral = styled.div`
  button {
    font-size: 20px;
    :hover {
      background-color: orange;
      transition: 0.5s;
    }
  }
  grid-area: 2/1/4/2;
`;
const Body = styled.div`
  grid-area: 2/2/4/3;
`;
const Footer = styled.div`
  grid-area: 4/1/5/3;
  text-align: center;
  /* height: 10px; */
`;
const PlaylistUser = styled.div`
  display: grid;
  color: white;
`;

class App extends React.Component {
  state = {
    nome: "",
    ListMusic: [],
  };
  onChangePlaylist = (event) => {
    this.setState({ nome: event.target.value });
  };
  createPlaylist = () => {
    const body = {
      name: this.state.nome,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "fabiano-lopes-ailton",
          },
        }
      )
      .then(() => {
        this.getListMusic();
        alert("Play Lista Criada");
        this.setState({
          nome: "",
        });
      })
      .catch(() => {
        alert("Erro. Play Lista existente");
      });
  };
  componentDidMount() {
    this.getListMusic();
  }
  componentDidUpdate() {
    console.log(this.state.nome);
  }

  deletePlaylist = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        { headers: { Authorization: "fabiano-lopes-ailton" } }
      )
      .then((res) => {
        alert("Playlist excluída");
        this.getListMusic();
      })
      .catch();
  };
  getListMusic = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "fabiano-lopes-ailton",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ ListMusic: response.data.result.list });
      })
      .catch(() => {
        alert("Ocorreu um erro, tente novamente");
      });
  };
  render() {
    return (
      <Container>
        <Menu>
          {" "}
          <MenuComponent></MenuComponent>{" "}
        </Menu>
        <BarraLateral>
          <p>Início</p>
          <p>Buscar</p>
          <p>Biblioteca</p>
          <p>
            {" "}
            Criar Play lista <br /> <input
              onChange={this.onChangePlaylist}
            />{" "}
            <button onClick={this.createPlaylist}>+</button>
          </p>

          <PlaylistUser>
            <h3>Suas PlayList: </h3>
            {this.state.ListMusic.sort().map((listaMusicas) => {
              return (
                <div key={listaMusicas.id}>
                  {" "}
                  {listaMusicas.name}{" "}
                  <button onClick={() => this.deletePlaylist(listaMusicas.id)}>
                    -
                  </button>{" "}
                </div>
              );
            })}
          </PlaylistUser>
        </BarraLateral>
        <Body>
          {" "}
          <CardMusicas></CardMusicas>{" "}
        </Body>
        <Footer>Rodapé</Footer>
      </Container>
    );
  }
}
export default App;
