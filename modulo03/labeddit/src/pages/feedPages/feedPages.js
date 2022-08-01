import { baseURL } from "../../components/url/url";
import { useProtectedPage } from "../../components/useProtectPage";
import { useEffect, useState } from "react";
import btnComment from "../../img/btnComment.png";
import axios from "axios";
import {
  InputPost,
  InputBoxPost,
  InputBoxTitle,
  CardFeeds,
  CardDiv,
  UserName,
  ButtonLogout,
  BtnComment,
  Img1,
  Img2,
  Img3,
  Img4,
  ButtonVoltar,
  HeaderDiv,
} from "./feedPagesCss";
import { useNavigate } from "react-router-dom";

export default function Feeds() {
  useProtectedPage();
  const navigate = useNavigate();
  const [itens, setItens] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(itens.length / itensPerPage);
  const starIndex = currentPage * itensPerPage;
  const endIndex = starIndex + itensPerPage;
  const currentIndex = itens.slice(starIndex, endIndex);
  const goToLogout = () => {
    localStorage.clear("token");
    navigate("/");
  };
  const goToPosts = (id) => {
    navigate(`/feeds/posts/${id}`);
  };
  const [form, setForm] = useState({
    title: "",
    body: "",
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const CreatePost = (event) => {
    axios
      .post(`${baseURL}posts/`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        alert("Post Criado");
      })
      .catch((error) => {});
  };
  // useEffect(() => {
  //   CreatePost();
  // }, []);
  useEffect(() => {
    feeds();
  }, []);
  useEffect(() => {
    feeds();
  }, []);
  const getLocal = localStorage.getItem("token");
  const feeds = () => {
    axios
      .get(`${baseURL}posts?page=1&size=100`, {
        headers: {
          Authorization: getLocal,
        },
      })
      .then((response) => {
        setItens(response.data);
      })

      .catch((error) => {});
  };
  const getPosts =
    currentIndex &&
    currentIndex.map((post) => {
      return (
        <CardFeeds key={post.id}>
          <UserName>Enviado por: {post.username} </UserName>
          <strong>{post.title} </strong>
          <p> {post.body} </p>
          <BtnComment src={btnComment} onClick={() => goToPosts(post.id)} />
        </CardFeeds>
      );
    });
  return (
    <div>
      <HeaderDiv>
        <Img1></Img1>
        <Img2></Img2>
        <Img3></Img3>
        <Img4></Img4>
        <ButtonLogout onClick={goToLogout}>Logout</ButtonLogout>
      </HeaderDiv>

      <div>
        <select
          value={itensPerPage}
          onChange={(event) => setItensPerPage(Number(event.target.value))}
        >
          <option>2</option>
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
      </div>
      <div>
        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              value={index}
              onClick={(event) => setCurrentPage(Number(event.target.value))}
            >
              {index + 1}{" "}
            </button>
          );
        })}
      </div>
      <InputPost>
        <form onSubmit={CreatePost}>
          <InputBoxTitle
            placeholder="Titulo"
            onChange={onChange}
            name="title"
            value={form.title}
          />
          <InputBoxPost
            placeholder="Escreva seu post..."
            onChange={onChange}
            name="body"
            value={form.body}
          />
          <button>Postar</button>
        </form>
      </InputPost>
      <CardDiv>{getPosts} </CardDiv>
    </div>
  );
}
