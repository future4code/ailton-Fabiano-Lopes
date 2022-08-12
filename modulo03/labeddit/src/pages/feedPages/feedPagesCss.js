import styled from "styled-components";

export const CardFeeds = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 9px 10px;
  gap: 18px;
  margin-left: 30px;
  width: 300px;
  margin-top: 8px;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-family: "IBM Plex Sans";
  font-style: normal;
`;

export const UserName = styled.p`
  width: 132px;
  height: 16px;
  margin-top: 0;
  margin-left: auto;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #6f6f6f;
`;
export const CardDiv = styled.div`
  margin-top: 70px;
`;
export const InputPost = styled.div`
  margin-top: 124px;
  margin-left: 30px;
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
export const InputBoxPost = styled.input`
  width: 300px;
  height: 200px;
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
`;
export const InputBoxTitle = styled.input`
  width: 300px;
  height: 40px;
  background-color: #ededed;

  font-family: "IBM Plex Sans";
  font-style: normal;
`;
export const BtnComment = styled.img`
  width: 20px;
  margin-left: 250px;
`;

export const HeaderDiv = styled.div`
  background-color: #ededed;
  width: 100vw;
  height: 5vh;
`;
export const ButtonVoltar = styled.button`
  top: 0;
  left: 0%;
  font-size: 20px;
`;
export const ButtonLogout = styled.button`
  left: 82%;
  top: 0;
  position: absolute;
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
