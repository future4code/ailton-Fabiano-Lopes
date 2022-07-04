import React from "react";
import styled from "styled-components";
import axios from "axios";
import CardMusicas from "./componentes/CardMusicas";
import MenuComponent from "./componentes/Menu";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(10, 1fr);
  background: black;
  color: white;
  height: 100vh;
`;
const Menu = styled.div`
  grid-area: 1/1/2/5;
  text-align: center;
`;
const BarraLateral = styled.div`
  grid-area: 2/1/10/2;
  button {
    font-size: 20px;
    :hover {
      background-color: orange;
      transition: 0.5s;
    }
  }
  grid-area: 2/1/4/2;
`;
const ListButton = styled.button`
  width: 200px;
  border-radius: 20px;
  text-align: center;
  background-color: grey;
  margin-top: 10px;
  :hover {
    background-color: orange;
    transition: 0.8s;
  }
`;
const Body = styled.div`
  grid-area: 2/2/10/5;
  width: 100%;
`;
const Footer = styled.div`
  grid-area: 10/1/11/5;
  text-align: center;
`;
const PlaylistUser = styled.div`
  display: grid;
  color: white;
`;

class App extends React.Component {
  state = {
    nome: "",
    ListMusic: [],
    musicDetail: [],
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
  // componentDidUpdate() {
  //   console.log(this.state.nome);
  // }

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
        this.setState({ ListMusic: response.data.result.list });
      })
      .catch(() => {
        alert("Ocorreu um erro, tente novamente");
      });
  };
  getMusicDetail = (musica) => {
    console.log(musica);

    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${musica.id}/tracks`,
        {
          headers: {
            Authorization: "fabiano-lopes-ailton",
          },
        }
      )
      .then((response) => {
        this.setState({
          musicDetail: response.data.result.tracks,
          idEscolhido: musica.id,
        });
        console.log(musica);
        console.log(response);
      })
      .catch(() => {
        alert("Ocorreu um erro, tente novamente");
      });
  };

  delMusic = (musicas) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${musicas.idEscolhido}/tracks/${musicas.id}`,
        { headers: { Authorization: "fabiano-lopes-ailton" } }
      )
      .then((res) => {
        alert("Música excluída");
        this.getMusicDetail();
      })
      .catch();
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
            Criar Playlist <br /> <input
              onChange={this.onChangePlaylist}
            />{" "}
            <button onClick={this.createPlaylist}>+</button>
          </p>

          <PlaylistUser>
            <h3>Suas PlayList: </h3>
            <div>
              {this.state.ListMusic.sort().map((listaMusicas) => {
                return (
                  <ListButton
                    onClick={() => this.getMusicDetail(listaMusicas)}
                    key={listaMusicas.id}
                  >
                    {" "}
                    {listaMusicas.name}{" "}
                    <button
                      onClick={() => this.deletePlaylist(listaMusicas.id)}
                    >
                      x
                    </button>{" "}
                  </ListButton>
                );
              })}
            </div>
          </PlaylistUser>
        </BarraLateral>
        <Body>
          <CardMusicas idSelect={this.state.idEscolhido}>
            {this.ListMusic}
          </CardMusicas>

          {this.state.musicDetail.map((musicas) => {
            return (
              <div>
                {musicas.name} - {musicas.artist}
                <button onClick={() => this.delMusic(musicas.id)}>
                  X
                </button>{" "}
              </div>
            );
          })}
        </Body>
        <Footer>Rodapé</Footer>
      </Container>
    );
  }
}
export default App;
