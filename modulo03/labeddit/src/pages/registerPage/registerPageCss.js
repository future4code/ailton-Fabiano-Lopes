import styled from "styled-components";
import React from "react";
export const ContainerRegister = styled.div`
  width: 328px;
  height: 100%;
  top: -464px;
  left: -406px;
  h1 {
    width: 364px;
    height: 86px;
    margin-top: 80px;
    margin-left: 32px;
    font-family: IBM Plex Sans;
    font-size: 30px;
    /* line-height: 47px; */
  }

  h3 {
    margin-left: 80px;
    font-size: 12px;
  }
`;
export const InputDivRegister = styled.form`
  margin-top: 70px;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px 133px;
    gap: 10px;

    position: absolute;
    width: 300px;
    height: 40px;
    margin-left: 30px;
    margin-top: 20px;
    border-radius: 30px;

    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    border-radius: 27p;
  }
`;
export const InputBoxRegister = styled.input`
  width: 340px;
  height: 50px;
  border: 1px solid #d5d8de;
  margin-top: 6px;
  margin-left: 6px;
`;
