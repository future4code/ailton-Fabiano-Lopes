import styled from "styled-components";
export const ContainerLogin = styled.div`
  width: 328px;
  height: 100%;
  top: -464px;
  left: -406px;
  h1 {
    width: 152px;
    height: 47px;
    margin-top: 105px;
    margin-left: 120px;
    font-family: IBM Plex Sans;
    font-size: 40px;
    line-height: 47px;
  }

  h3 {
    color: #a8bbc6;
    margin-top: -30px;
    margin-left: 100px;
    font-size: 12px;
  }
`;

export const InputDiv = styled.form`
  input {
    width: 340px;
    height: 50px;
    border: 1px solid #d5d8de;
    margin-top: 6px;
    margin-left: 6px;
  }
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

export const BarraLogin = styled.div`
  position: absolute;
  width: 90%;
  height: 3px;
  margin-left: 20px;
  margin-top: 90px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
`;
export const RegisteButton = styled.button`
  background-color: white;
  color: orange;
  width: 300px;
  height: 40px;
  margin-top: 120px;
  margin-left: 30px;
  border-radius: 30px;
`;

export const Img1 = styled.div`
  background-color: #fe7e02;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 39.02%;
  right: 51.17%;
  top: 4.36%;
  bottom: 81.1%;
  border-radius: 100px 0 0 0;
`;
export const Img2 = styled.div`
  position: absolute;
  left: 49.7%;
  right: 41.36%;
  top: 4.36%;
  bottom: 81.1%;
  background: #45525b;
  width: 40px;
  height: 40px;
  border-radius: 100px 0 0 0;
`;
export const Img3 = styled.div`
  position: absolute;
  left: 39.02%;
  right: 51.17%;
  top: 10.35%;
  bottom: 76.56%;
  background: #f9b24e;
  width: 40px;
  height: 40px;
  border-radius: 0 0 100px 0;
`;
export const Img4 = styled.div`
  position: absolute;
  left: 49.7%;
  right: 41.36%;
  top: 10.35%;
  bottom: 76.56%;
  background: #a8bbc6;
  width: 40px;
  height: 40px;
  border-radius: 0 0 100px 0;
`;
