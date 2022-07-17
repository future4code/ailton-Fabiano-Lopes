import styled from "styled-components";

export const MenuBarCreate = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-family: "Geostar Fill", cursive;
  margin-left: 40vw;
  justify-content: center;
  align-content: center;
  /* color: #4b0082; */
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16vh;
  margin-left: 30vw;

  select {
    margin-top: 1vh;
    margin-left: 5vw;
    width: 30vw;
    height: 5vh;
    font-size: 18px;
  }
  input {
    margin-left: 5vw;
    width: 30vw;
    height: 5vh;
    font-size: 18px;
    margin-top: 1vh;
  }
  button {
    width: 6vw;
    height: 4vh;
    font-size: 16px;
    margin-left: 16vw;
    margin-top: 1vh;
  }
`;
export const DivButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28vh;
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

export const DivButtonCriar = styled.div`
  margin-left: 16vw;
  margin-top: 4vh;
  cursor: pointer;
  div {
    border: 2px solid white;
    box-shadow: 3px 3px 3px white;
    border-radius: 4px;
    font-size: 30px;
    font-family: "Geostar Fill", cursive;
    color: white;
    background-color: grey;
    width: 10vw;
    :hover {
      background-color: burlywood;
    }
  }
`;
