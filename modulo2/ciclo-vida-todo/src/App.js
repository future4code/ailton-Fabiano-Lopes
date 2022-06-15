import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: "",
        completa: false,
      },
      {
        id: Date.now(), // Explicação abaixo
        texto: "",
        completa: true, // Indica se a tarefa está completa (true ou false)
      },
    ],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.texto === this.state.texto) {
      localStorage.setItem("tarefa", JSON.stringify(this.state.tarefas));
    }
  }

  componentDidMount() {
    const tarefa = localStorage.getItem("tarefas");
    if (tarefa) {
      const dadosTarefas = localStorage.getItem("usuarios");
      const dadosConvertidos = JSON.parse(dadosTarefas);
      this.setState({ id: dadosConvertidos[0]?.id });
      this.setState({ texto: dadosConvertidos[0]?.texto });
    }
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const newArray = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: true,
    };
    const newList = [newArray, ...this.state.inputValue];
    newList.push(newArray);
    this.setState({ tarefas: newList });
  };

  selectTarefa = (id) => {};

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
