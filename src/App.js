// VARIABILI

const user = {
  id: 1,
  name: 'Melissa',
  image: 'https://github.com/moonymel.png'
}

const defaultImage = 'https://via.placeholder.com/32x32.png'


// FUNZIONI

function boldify(str) {
  return <strong>{str}</strong>;
}

// controllo sull'immagine
function getImageOrDefaultURL(imageUrl) {
  try {
    new URL(imageUrl);
    return imageUrl;
  }
  catch {
    return defaultImage;
  }
}


// COMPONENTI 

function AppTitle() {
  return <h1>Todo app</h1>;
}

function AppMessage({ user: { id, name, image = defaultImage } }) {

  return <p>
    <img src={getImageOrDefaultURL(image)} width="32" />
    <span className="hello"> Benvenuta {boldify(name)}!</span>{" "}
    <span className="miss">Il tuo id è il numero {id}.</span>
  </p>;
}

export default function App() {
  return (
    <div>
      <AppTitle />
      <AppMessage user={user} />
    </div>
  );
}
