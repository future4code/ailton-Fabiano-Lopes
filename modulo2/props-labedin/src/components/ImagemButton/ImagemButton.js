import React from 'react';
import style from 'styled-components'

const ImgButton = style.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    `

const BtnImg = style.img`
    width: 30px;
    margin-right: 10px;
    `

function ImagemButton(props) {
    return (
        <ImgButton>
            <BtnImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImgButton>

    )
}

export default ImagemButton;