import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './img/foto.jpeg'
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './img/email.png';
import enderecoImg from './img/endereco.png'
import agricultura from './img/agricultura.jpg'
import analise from './img/analise.png'
import seta from './img/seta.png'
import style from 'styled-components'

const AppContainer= style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const PageContainer= style.div `
width: 40vw;
margin: 10px 0;
`

const PageH2= style.h2`
display: flex;
justify-content: center;
margin-bottom: 20px;
`

function App() {
  return (
    <AppContainer>
      <PageContainer>
        <PageH2>Dados pessoais</PageH2>
        <CardGrande 
          imagem={foto} 
          nome="Fabiano Cunha Lopes" 
          descricao="Oi, Sou Fabiano. Gosto de pescar, passear de moto, assistir filmes, tenho um filho de 3 anos, tenho 2 cachorros."
        />
        
        <ImagemButton 
          imagem={seta}
          texto="Ver mais"
        />
      </PageContainer>
      <PageContainer>
        <CardPequeno 
        imagem={email} 
        endereco="fabianoclopes@gmail.com" />
        <CardPequeno  
        imagem= {enderecoImg}
        endereco="Povoado Colônia Sucupira, Arauá-SE" />
        
         </PageContainer>
      <PageContainer>
        <PageH2>Experiências profissionais</PageH2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome=" Full Web" 
          descricao="Estudante em formação pela Labenu" 
        />
        
        <CardGrande 
          imagem= {agricultura} 
          nome="Agricultor" 
          descricao="Agricultura Familiar." 
        />
        <CardGrande
        imagem= {analise}
        nome = "Análise e Desenvolvimento de Sistemas"
        descricao= "Estudante em formação pela Uninassau"
        
        />
      </PageContainer>

      <PageContainer>
        <PageH2>Minhas redes sociais</PageH2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto= "Facebook"
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageContainer>
    </AppContainer>
  );
}

export default App;
