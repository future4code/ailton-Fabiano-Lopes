import styled from "styled-components";

export const InputPost = styled.div`
  margin-top: 124px;
  margin-left: 30px;
  input {
    width: 300px;
    height: 131px;
    background-color: #ededed;
    ::placeholder {
      position: absolute;
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
      margin-top: 10px;
      margin-left: 10px;
      color: #6f6f6f;
    }
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px 133px;
    gap: 10px;
    color: white;
    position: absolute;
    width: 300px;
    height: 40px;
    margin-top: 10px;
    border-radius: 30px;

    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    border-radius: 27p;
  }
`;
