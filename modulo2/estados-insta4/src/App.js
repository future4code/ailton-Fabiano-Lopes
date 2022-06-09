import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const NovoPost = styled.div `
border: 1px solid gray;
width: 300px;
margin-bottom: 10px;
text-align:center;
`
const NewInput= styled.input `
width: 250px;
`
const NewButton = styled.button`
:hover{
background-color: blue;
transition: 0.3s;
color: white;
}
`
class App extends React.Component {
state={
    postArr: [
    { nomeUsuario: "Paulinha",
    fotoUsuario:"https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150"
  },
  {
    nomeUsuario:'Mateus',
    fotoUsuario:'https://picsum.photos/60/60',
    fotoPost:'https://picsum.photos/200/120'
  },

  {
    nomeUsuario:'Gustavo',
        fotoUsuario:'https://picsum.photos/50/60',
        fotoPost:'https://picsum.photos/200/110'
  }
  ],

 valorInputNome: "",
 valorInputPost:"",
 valorInputFoto: ""
}

addPost=()=> {
  const newPost = {
    
    nomeUsuario: this.state.valorInputNome,
    fotoUsuario: this.state.valorInputFoto,
    fotoPost: this.state.valorInputPost
  }

  const novoPost = [...this.state.postArr, newPost];
  this.setState({postArr:novoPost})
}
onChangeInputNome = (event)=>{
  this.setState({valorInputNome:event.target.value});
}
onChangeInputPost = (event)=>{
  this.setState({valorInputPost:event.target.value});
}
onChangeInputFoto = (event)=>{
  this.setState({valorInputFoto:event.target.value});
}


  render() {
    const listaObjeto = this.state.postArr.map((pessoa)=>{
      return(
     <Post nomeUsuario= {pessoa.nomeUsuario} fotoUsuario= {pessoa.fotoUsuario} fotoPost= {pessoa.fotoPost} /> 
     
      )
    });
    return (
      <MainContainer>
     
      
       {listaObjeto}   
    
       <NovoPost>
      <h2>Nova Postagem</h2>
      <NewInput placeholder='Nome do Usuário'
      value={this.state.valorInputNome}
      onChange={this.onChangeInputNome}
      
      />
      <NewInput placeholder='Foto do Post'
       value={this.state.valorInputPost}
       onChange={this.onChangeInputPost}
      />
      <NewInput placeholder='Foto do Usuário'
       value={this.state.valorInputFoto}
       onChange={this.onChangeInputFoto}
      />
      <NewButton onClick={this.addPost}>Postar</NewButton>

    </NovoPost>
      </MainContainer>
    );
  }
}

export default App;
