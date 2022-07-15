import React from "react";
import { useNavigate } from "react-router-dom";
export default function Aplication() {
  const navigate = useNavigate();
  const goToBackPage = () => {
    navigate(-1);
  };
  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={goToHomePage}>Home</button>
      <button onClick={goToBackPage}>voltar</button>
      <h1>SignUpPage</h1>
    </div>
  );
}
