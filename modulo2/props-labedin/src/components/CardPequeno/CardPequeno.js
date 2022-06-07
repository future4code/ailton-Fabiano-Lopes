import React from 'react'
import style from 'styled-components'

const smallcardContainer = style.div`

  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 60px;
  `

const smallcardImg = style.img`
width: 40px;
padding: 5px;
`



const CardPequeno = (props) => {
  return (
    <smallcardContainer>
        <smallcardImg src={props.imagem}/>
        <div><h4>
            {props.endereco}</h4></div>

    </smallcardContainer>
  )
}

export default CardPequeno