import styled from "styled-components";

export const ButtonNo = styled.button`
  -moz-border-radius: 100px;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-border-radius: 100px;
  -webkit-box-shadow: #6e7849 0 0 10px;
  -webkit-transition: all 0.5s ease;
  background-color: #ffffff;
  border-radius: 100px;
  border: 1px solid #ff0003;
  color: #ff0003;
  display: inline-block;
  font-size: 35px;
  width: 60px;
  height: 60px;
  margin-left: 100px;
  padding: 0 10px;
  text-decoration: none;
  text-shadow: #000000 5px 5px 15px;
  transition: all 0.5s ease;

  :hover {
    background-color: #ff0003;
    color: #ffffff;
    font-size: 35px;
    width: 60px;
    height: 60px;
    padding: 0 10px;
    text-decoration: none;
    text-shadow: #ffffff 5px 5px 15px;
  }
`;

export const ButtonYes = styled.button`
  -moz-border-radius: 100px;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-border-radius: 300px;
  -webkit-box-shadow: #6e7849 0 0 10px;
  -webkit-transition: all 0.5s ease;
  background-color: #ffffff;
  border-radius: 300px;
  border: 1px solid #00ff00;
  color: green;
  display: inline-block;
  font-size: 40px;
  width: 60px;
  height: 60px;
  margin-left: 90px;
  padding: 0 10px;
  text-decoration: none;
  text-shadow: #000000 5px 5px 15px;
  transition: all 0.5s ease;

  :hover {
    background-color: green;
    color: #ffffff;
    font-size: 40px;
    width: 60px;
    height: 60px;
    padding: 0 10px;
    text-decoration: none;
    text-shadow: #ffffff 5px 5px 15px;
  }
`;
export const Container = styled.div`
  display: grid;
  background-color: #2e2e2e;
  justify-items: center;
  align-items: center;
  height: 100vh;
`;
export const Card = styled.div`
  display: flex;
  width: 30vw;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  h1 {
    color: #ff8e14;
  }
  header {
    display: flex;
    justify-content: space-between;

    button {
      width: 40px;
      height: 40px;
      background-color: white;
      border-radius: 40px;
      :hover {
        background-color: orange;
      }
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
`;
export const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-image: url(${(props) => props.foto});
  background-size: cover;
  width: 400px;
  height: 400px;
  align-content: center;
  color: white;
  text-shadow: 1px 1px 4px black;

  h3,
  p,
  strong {
    margin: 0;
    text-align: center;
  }
`;

export const ContainerMatch = styled.div`
  display: grid;
  background-color: #2e2e2e;
  justify-items: center;
  align-items: center;
  height: 100vh;
`;

export const MatchContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const CardMatch = styled.li`
  color: black;
  text-shadow: 1px 1px 2px black;
  list-style: none;
  font-size: 22px;
  background-color: white;
  width: 30vw;
  border: 1px solid orange;
  img {
    width: 50px;
    height: 60px;
  }
`;
