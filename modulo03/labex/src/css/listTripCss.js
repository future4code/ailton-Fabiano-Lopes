import styled from "styled-components";

export const MenuBarList = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-family: "Geostar Fill", cursive;
  margin-left: 45vw;
  justify-content: center;
  align-content: center;
  /* color: #4b0082; */
`;

export const ListDiv = styled.div`
  margin-left: 30vw;
  margin-top: 16vh;
  background-color: grey;
  opacity: 100%;
  width: 40vw;
`;
export const ListTravel = styled.div`
  color: #4b0082;
  padding: 10px;
  border: 2px solid white;
`;
export const DivButtonsList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16vh;
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
