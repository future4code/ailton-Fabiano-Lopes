import React from "react";
import styled from "styled-components";
import axios from "axios";
const Container = styled.div`
  display: grid;
  justify-items: center;
`;
// const Card = styled.div`
//   color: white;
// `;
class CardMusicas extends React.Component {
  state = {
    ListMusica: ["inicio"],
    nome: "",
    artista: "",
    url: [
      "http://spoti4.future4.com.br/1.mp3",
      "http://spoti4.future4.com.br/2.mp3",
      "http://spoti4.future4.com.br/3.mp3",
      "http://spoti4.future4.com.br/4.mp3",
      "http://spoti4.future4.com.br/5.mp3",
      "http://spoti4.future4.com.br/6.mp3",
      "http://spoti4.future4.com.br/7.mp3",
      "http://spoti4.future4.com.br/8.mp3",
      "http://spoti4.future4.com.br/9.mp3",
      "http://spoti4.future4.com.br/10.mp3",
      "http://spoti4.future4.com.br/11.mp3",
      "http://spoti4.future4.com.br/12.mp3",
      "http://spoti4.future4.com.br/13.mp3",
      "http://spoti4.future4.com.br/14.mp3",
      "http://spoti4.future4.com.br/15.mp3",
      "http://spoti4.future4.com.br/16.mp3",
      "http://spoti4.future4.com.br/17.mp3",
      "http://spoti4.future4.com.br/18.mp3",
      "http://spoti4.future4.com.br/19.mp3",
      "http://spoti4.future4.com.br/20.mp3",
    ],
  };
  //   getListMusic = () => {
  //     axios
  //       .get(
  //         "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
  //         {
  //           headers: {
  //             Authorization: "fabiano-lopes-ailton",
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         console.log(response.data);
  //         this.setState({ ListMusicTela: response.data.result.list });
  //       })
  //       .catch(() => {
  //         alert("Ocorreu um erro, tente novamente");
  //       });
  //   };
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
        // console.log(response);
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
  render() {
    return (
      <Container>
        <h2>Musicas:</h2>
        {this.state.ListMusica.sort().map((listaMusicas) => {
          return <div key={listaMusicas.id}> {listaMusicas.name} </div>;
        })}
      </Container>
    );
  }
}
export default CardMusicas;
