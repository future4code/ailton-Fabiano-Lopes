import React from 'react';
import style from 'styled-components'

const BigContainer = style.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;
`
const BigDiv = style.div`
display: flex;
flex-direction: column;
justify-items: flex-start;

`
const BigImg = style.img`
width: 70px;
margin-right: 10px;
border-radius: 50%;
`
const BigH4= style.h4`
margin-bottom: 15px;
`
function CardGrande(props) {
    return (
        <BigContainer>
            <BigImg src={ props.imagem } />
            <BigDiv>
                <BigH4>{ props.nome }</BigH4>
                <p>{ props.descricao }</p>
            </BigDiv>
        </BigContainer>
    )
}

export default CardGrande;