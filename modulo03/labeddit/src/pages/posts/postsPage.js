import { InputPost } from "./postsPageCss";
// import axios from "axios";
// import { BASE_URL } from "../constants/Urls";
import { useProtectedPage } from "../../components/useProtectPage";
import { useNavigate, useParams } from "react-router-dom";
// import { useRequestData } from "../Hook/useRequestData";

export default function Posts() {
  useProtectedPage();
  const navigate = useNavigate();
  const goToLogout = () => {
    localStorage.clear("token");
    navigate("/");
  };
  return (
    <div>
      <button onClick={goToLogout}>Logout</button>
      <InputPost>
        <form>
          <input placeholder="Escreva seu post..." />
          <button>Postar</button>
        </form>
      </InputPost>

      <div></div>
    </div>
  );
}
