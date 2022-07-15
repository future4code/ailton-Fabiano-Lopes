import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  CardMatch,
  ContainerMatch,
  MatchContainer,
} from "../components/styles";

function Match(props) {
  const [matchsList, setMatchlist] = useState([]);
  useEffect(() => {
    const getMatchList = () => {
      axios
        .get(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabianolopes/matches"
        )
        .then((response) => {
          setMatchlist(response.data.matches);
        });
    };

    getMatchList();
  }, []);
  const buttonClear = () => {
    axios.put(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabianolopes/clear"
    );
  };
  return (
    <ContainerMatch>
      {" "}
      <h1>Matchs</h1>
      <MatchContainer>
        {matchsList.map((match) => {
          return (
            <CardMatch>
              <img src={match.photo}></img>
              {"  "} {match.name}, {match.age}
            </CardMatch>
          );
        })}
      </MatchContainer>
      <button onClick={props.mudaInicioPage}>inicio</button>
      <button onClick={buttonClear}>Clear Matches</button>
    </ContainerMatch>
  );
}
export default Match;
