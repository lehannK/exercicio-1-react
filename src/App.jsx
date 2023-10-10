export default function App() {
  return (
    <div className="App">
      <img src="/react.png" style={{ height: "150px" }}></img>
      <h1>React</h1>
      <h4 style={{ fontWeight: "100" }}>
        A biblioteca para interfaces de usuário web e nativas.
      </h4>
      <button>Aprenda React</button>
      <button>Referência da API</button>
      <hr></hr>
      <h2>Crie interfaces de usuário de componentes</h2>
      <h4 style={{ fontWeight: "100" }}>
        React permite que você construa interfaces de usuário a partir de
        pedaços individuais chamados componentes.
      </h4>
      <h2>Escreva componentes com código e marcação</h2>
      <h4 style={{ fontWeight: "100" }}>
        Componentes React são funções Javascript. A sintaxe de marcação é
        chamada de JSX. É uma extensão da sintaxe Javascript popularizada pelo
        React.
      </h4>
      <hr></hr>
      <h2>Próximos passos</h2>
      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>Uso de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JavaScript</li>
      </ul>
    </div>
  );
}
