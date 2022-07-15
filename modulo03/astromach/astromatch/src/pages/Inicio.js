import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ButtonYes,
  ButtonNo,
  Container,
  Card,
  ImgDiv,
} from "../components/styles";
import gostar from "../img/gostar.png";

function Inicio(props) {
  const [listPerson, setListPerson] = useState({});
  useEffect(() => {
    getListPerson();
  }, []);

  const getListPerson = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabianolopes/person"
      )
      .then((response) => {
        setListPerson(response.data.profile);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const onButtonYes = (valorId) => {
    const body = { id: valorId, choice: true };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabianolopes/choose-person",
        body
      )
      .catch((error) => {
        console.log(error.message);
      });
    getListPerson();
  };

  const onButtonNo = (valorId) => {
    const body = { id: valorId, choice: false };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabianolopes/choose-person",
        body
      )
      .catch((error) => {
        console.log(error.message);
      });
    getListPerson();
  };
  return (
    <Container>
      <Card>
        <header>
          <h1>Astromatch</h1>
          <button onClick={props.mudaMatchPage}>
            <img src={gostar} />
          </button>
        </header>
        {listPerson && (
          <div>
            <ImgDiv foto={listPerson.photo}>
              <h3>{listPerson.name}</h3>
              <p>{listPerson.age}</p>
              <strong>{listPerson.bio}</strong> <br />
            </ImgDiv>
            <ButtonNo
              onClick={() => {
                onButtonNo(listPerson.id);
              }}
            >
              X
            </ButtonNo>
            <ButtonYes
              onClick={() => {
                onButtonYes(listPerson.id);
              }}
            >
              ♥
            </ButtonYes>
          </div>
        )}
      </Card>
    </Container>
  );
}
export default Inicio;
