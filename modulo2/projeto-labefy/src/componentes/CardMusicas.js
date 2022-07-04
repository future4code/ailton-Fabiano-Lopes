import React from "react";
import styled from "styled-components";
import axios from "axios";
const Container = styled.div`
  h2 {
    margin-left: 350px;
  }
  input {
    width: 150px;
  }
`;
class CardMusicas extends React.Component {
  state = {
    ListMusica: [],
    nome: "",
    artista: "",
    url: "",
    musicDetail: {},
  };

  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };
  onChangeArtista = (event) => {
    this.setState({ artista: event.target.value });
  };
  onChangeUrl = (event) => {
    this.setState({ url: event.target.value });
  };

  addMusic = (id) => {
    const body = {
      name: this.state.nome,
      artist: this.state.artista,
      url: this.state.url,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        body,
        {
          headers: {
            Authorization: "fabiano-lopes-ailton",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("Música Criada");
      })
      .catch(() => {
        alert("Erro. Música existente");
      });
  };

  render() {
    return (
      <Container>
        <h2>Musicas:</h2>
        Artista ou banda <input onChange={this.onChangeArtista} /> Nome da
        Música <input onChange={this.onChangeNome} />
        Url <input onChange={this.onChangeUrl} />{" "}
        <button onClick={() => this.addMusic(this.props.idSelect)}>
          Adicionar
        </button>
        <div>
          {" "}
          {this.state.ListMusica.map((listaMusicas) => {
            return <div key={listaMusicas.id}> {listaMusicas.name} </div>;
          })}
        </div>
      </Container>
    );
  }
}
export default CardMusicas;
