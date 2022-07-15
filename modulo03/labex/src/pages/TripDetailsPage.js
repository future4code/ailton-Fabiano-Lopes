import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import { useProtectedPage } from "../constants/useProtectPage";

export const TripDetails = () => {
  useProtectedPage();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `${BASE_URL}/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDM4Njh9.mmOrfGKlXpE3pIDUZfS3xV5ZwttOI2Exmoci9Sdsxjs`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);
  return <div>Detalhes da viagem!!!</div>;
};
