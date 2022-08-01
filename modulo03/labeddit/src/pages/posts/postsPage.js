import {
  ButtonLogout,
  ButtonVoltar,
  DivCardPost,
  HeaderDiv,
  Img1,
  Img2,
  Img3,
  Img4,
} from "./postsPageCss";
import axios from "axios";
import { useProtectedPage } from "../../components/useProtectPage";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL } from "../../components/url/url";
import { CardFeeds, UserName } from "../feedPages/feedPagesCss";

export default function Posts() {
  useProtectedPage();
  const pathParams = useParams();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const goToLogout = () => {
    localStorage.clear("token");
    navigate("/");
  };
  const buttonVoltar = () => {
    navigate("/feeds");
  };
  useEffect(() => {
    axios
      .get(`${baseURL}posts/`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setPosts(response.data);
      });
  }, []);
  useEffect(() => {
    const body = {
      title: comments.title,
      body: comments.body,
      username: comments.username,
    };
    axios
      .get(`${baseURL}posts/${posts.id}/comments`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setComments(response.data);
      });
  }, []);
  const getPosts =
    posts &&
    posts.map((post) => {
      if (post.id === pathParams.id) {
        return (
          <CardFeeds key={post.id}>
            <UserName>Enviado por: {post.username} </UserName>
            <strong>{post.title} </strong>
            <p> {post.body} </p>
          </CardFeeds>
        );
      }
    });

  const getComments =
    comments &&
    comments.map((comment) => {
      return (
        <div>
          {comment.username}
          {comment.title}
          {comment.body}
        </div>
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
        <ButtonVoltar onClick={buttonVoltar}>X</ButtonVoltar>
      </HeaderDiv>
      <DivCardPost>{getPosts}</DivCardPost>
      <div>{getComments} </div>
      <div></div>
    </div>
  );
}
