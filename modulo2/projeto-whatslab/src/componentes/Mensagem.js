import React from "react";
import styled from "styled-components";

const CardMsg = styled.div`
  background-color: #daf7f3;
  width: 12vw;
  height: 1fr;
  border-radius: 30px;
  padding: 0px 0px 0px 16px;
  border: 2px solid black;
`;

class Mensagem extends React.Component {
  render() {
    return (
      <div>
        <CardMsg>
          <p>Nome: {this.props.usuario}</p>
          <p>Mensagem: {this.props.mensagem}</p>
        </CardMsg>
      </div>
    );
  }
}
export default Mensagem;
