import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, MenuBar, DivButtons, Footer } from "../css/homeCss";
export default function Home() {
  const navigate = useNavigate();
  const goToListTripsPage = () => {
    navigate("/Trips/list");
  };
  const goToAdminPage = () => {
    navigate("admin");
  };
  return (
    <Container>
      <MenuBar>
        <h1>
          Labe<a>X</a>
        </h1>
        <h4>Sua Melhor Viagem</h4>
      </MenuBar>

      <DivButtons>
        {" "}
        <div onClick={goToListTripsPage}>Viagens</div>
        <div onClick={goToAdminPage}>Área Admin</div>
      </DivButtons>
      <Footer>
        {" "}
        <p>Copyright &copy; 2022 - FabianoLopes</p>
      </Footer>
    </Container>
  );
}
