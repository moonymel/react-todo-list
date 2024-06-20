// VARIABILI

const user = {
  name: 'Melissa',
  id: 1
}

// FUNZIONI

function boldify(str) {
  return <strong>{str}</strong>;
}

// COMPONENTI 

function AppTitle() {
  return <h1>Todo app</h1>;
}

function AppMessage(props) {
  return <p>
    <span className="hello">Benvenuta {boldify(props.name)}!</span>{" "}
    <span className="miss">Il tuo id è il numero {props.id}.</span>
  </p>;
}

export default function App() {
  return (
    <div>
      <AppTitle />
      <AppMessage {...user} />
    </div>
  );
}
