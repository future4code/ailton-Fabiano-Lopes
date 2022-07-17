import background from "../img/background.jpg";
import styled from "styled-components";
export const ContainerLogin = styled.div`
  background-image: url(${background});
  width: 100vw;
  height: 95vh;
  color: white;
`;
export const Menulogin = styled.div`
  margin-left: 50vw;
  /* margin-top: 30vh; */
`;
export const FormLogin = styled.div`
  margin-top: 25vh;
  margin-left: 30vw;

  input {
    width: 20vw;
    height: 4vh;
  }
  button {
    width: 5vw;
    height: 5vh;
    font-size: 20px;
  }
`;
export const ButtonsLogin = styled.div`
  display: flex;
  margin-top: 45vh;
  cursor: pointer;
  height: 5vh;
  margin-left: 30vw;
  div {
    margin-left: 10vw;
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
