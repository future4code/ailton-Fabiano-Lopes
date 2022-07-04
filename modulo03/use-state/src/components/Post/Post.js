import React, { useState } from "react";
import {
  PostContainer,
  PostHeader,
  UserPhoto,
  PostPhoto,
  PostFooter,
  CommentContainer,
} from "./styles";

import IconeComContador from "../IconeComContador/IconeComContador";
import SecaoComentario from "../SecaoComentario/SecaoComentario";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";

const Post = (props) => {
  const [comentado, setComentado] = useState(false);
  const [curtido, setCurtido] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(0);
  const [contadorComentario, setContadorComentario] = useState(0);
  const [listaComentarios, setListacomentarios] = useState([""]);

  const onClickCurtida = () => {
    if (curtido) {
      setCurtido(!curtido);
      setNumeroCurtidas(numeroCurtidas - 1);
    } else {
      setCurtido(!curtido);
      setNumeroCurtidas(numeroCurtidas + 1);
    }
  };

  const onClickComentario = () => {
    setComentado(!comentado);
  };

  const enviarComentario = (comentario) => {
    const lista = [...listaComentarios, comentario];
    setComentado(false);
    setListacomentarios(lista);
    setContadorComentario(contadorComentario + 1);
  };
  const iconeCurtida = curtido ? iconeCoracaoPreto : iconeCoracaoBranco;

  const caixaDeComentario = comentado ? (
    <SecaoComentario enviarComentario={enviarComentario} />
  ) : (
    listaComentarios.map((comentario) => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      );
    })
  );
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={"Imagem do usuario"} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={contadorComentario}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  );
};

export default Post;
