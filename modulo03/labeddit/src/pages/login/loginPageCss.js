import styled from "styled-components";
export const ContainerLogin = styled.div`
  width: 328px;
  height: 100%;
  top: -464px;
  left: -406px;
  h1 {
    width: 152px;
    height: 47px;
    margin-top: 128px;
    margin-left: 120px;
    font-family: IBM Plex Sans;
    font-size: 40px;
    line-height: 47px;
  }

  h3 {
    margin-left: 80px;
    font-size: 12px;
  }
`;
// export const Img1Login = styled.div`
//   margin-left: 39.02%;
//   margin-right: 51.17%;
//   margin-top: 14.36%;
//   bottom: 81.1%;
//   width: 30px;
//   background: #fe7e02;
// `;

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
  /* border: 20px solid linear-gradient(90deg, #ff6489 0%, #f9b24e 100%); */
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
