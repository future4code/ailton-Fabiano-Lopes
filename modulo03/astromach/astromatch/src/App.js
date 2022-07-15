import React, { useState } from "react";
import Inicio from "./pages/Inicio";
import Match from "./pages/Match";

export default function App(props) {
  const [tela, setTela] = useState("inicio");
  const mudaInicioPage = () => {
    setTela("inicio");
  };
  const mudaMatchPage = () => {
    setTela("match");
  };

  const onScrenn = () => {
    switch (tela) {
      case "inicio":
        return (
          <Inicio
            mudaInicioPage={mudaInicioPage}
            mudaMatchPage={mudaMatchPage}
          />
        );
      case "match":
        return (
          <Match
            mudaInicioPage={mudaInicioPage}
            mudaMatchPage={mudaMatchPage}
          />
        );
      default:
        return <Inicio mudaInicioPage={mudaInicioPage} />;
    }
  };

  return <div>{onScrenn()}</div>;
}
