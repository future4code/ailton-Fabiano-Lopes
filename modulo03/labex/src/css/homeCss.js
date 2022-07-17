import styled from "styled-components";
import background from "../img/background.jpg";
export const Container = styled.div`
  background-image: url(${background});
  width: 100vw;
  height: 100%;
`;

export const MenuBar = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  height: 10vh;
  h1 {
    color: white;
    font-size: 50px;
    font-family: "Geostar Fill", cursive;

    a {
      color: #4b0082;
    }
  }
  h4 {
    color: white;
    font-size: 20px;
    font-family: "Geostar Fill", cursive;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 400px;
  cursor: pointer;
  div {
    margin-left: 100px;
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

export const Footer = styled.footer`
  text-align: center;
  color: white;
  height: 10vh;
  margin-top: 100px;
`;
