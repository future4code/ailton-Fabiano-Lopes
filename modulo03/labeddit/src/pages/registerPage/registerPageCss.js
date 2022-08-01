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
    margin-top: 60px;
    margin-left: 32px;
    font-family: IBM Plex Sans;
    font-size: 30px;
  }

  h3 {
    margin-left: 80px;
    font-size: 12px;
  }
`;
export const InputDivRegister = styled.form`
  margin-top: 50px;
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
export const Img1 = styled.div`
  background-color: #fe7e02;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 45%;
  right: 51.17%;
  top: 0;
  bottom: 81.1%;
  border-radius: 100px 0 0 0;
`;
export const Img2 = styled.div`
  position: absolute;
  left: 49.5%;
  right: 41.36%;
  top: 0;
  bottom: 81.1%;
  background: #45525b;
  width: 16px;
  height: 16px;
  border-radius: 100px 0 0 0;
`;
export const Img3 = styled.div`
  position: absolute;
  left: 45%;
  right: 51.17%;
  top: 2.4%;
  bottom: 76.56%;
  background: #f9b24e;
  width: 16px;
  height: 16px;
  border-radius: 0 0 100px 0;
`;
export const Img4 = styled.div`
  position: absolute;
  left: 49.5%;
  right: 41.36%;
  top: 2.4%;
  bottom: 76.56%;
  background: #a8bbc6;
  width: 16px;
  height: 16px;
  border-radius: 0 0 100px 0;
`;
export const ButtonEntrar = styled.button`
  left: 82%;
  top: 0;
  position: absolute;
`;
export const HeaderDiv = styled.div`
  background-color: #ededed;
  width: 100vw;
  height: 5vh;
`;
