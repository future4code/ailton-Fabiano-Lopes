import styled from "styled-components";
import background from "../img/background.jpg";
export const ContainerAdmin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-image: url(${background});
  text-align: center;
  height: 100%;
  h1 {
    font-family: "Geostar Fill", cursive;
    font-size: 40px;
    color: white;
    width: 50vw;
    margin-left: 25vw;
    a {
      color: #4b0082;
    }
  }
`;

export const DivCard = styled.div`
  margin-top: 10vh;
  cursor: pointer;
`;
export const CardTrip = styled.div`
  border: 2px solid white;
  box-shadow: 3px 3px 3px white;
  border-radius: 4px;
  font-size: 20px;
  font-family: "Geostar Fill", cursive;
  color: white;
  background-color: grey;
  width: 20vw;
  margin-left: 40vw;
  margin-top: 2vh;

  :hover {
    background-color: burlywood;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30vh;
  cursor: pointer;
  div {
    margin-left: 5vw;
    border: 2px solid white;
    box-shadow: 3px 3px 3px white;
    border-radius: 4px;
    font-size: 30px;
    font-family: "Geostar Fill", cursive;
    color: white;
    background-color: grey;
    :hover {
      background-color: burlywood;
    }
  }
`;
