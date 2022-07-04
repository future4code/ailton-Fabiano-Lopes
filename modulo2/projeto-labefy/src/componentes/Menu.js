import React from "react";
import styled from "styled-components";
import axios from "axios";
const Container = styled.div``;
const MenuDiv = styled.div``;
class MenuComponent extends React.Component {
  render() {
    return (
      <Container>
        <MenuDiv>
          <h1> LabeFY</h1>
        </MenuDiv>
      </Container>
    );
  }
}
export default MenuComponent;
