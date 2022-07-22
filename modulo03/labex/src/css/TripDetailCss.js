import styled from "styled-components";
import background from "../img/background.jpg";
export const ContainerDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-image: url(${background});
  text-align: center;
  height: 100%;
  color: white;
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
export const DivButtonsDetail = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30vh;
  cursor: pointer;
  div {
    margin-left: 4vw;
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

export const CardDetail = styled.div`
  border: 1px solid white;
  width: 20vw;
  margin-left: 40%;
  margin-top: 10%;
`;
