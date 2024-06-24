import Sidebar from "./components/Sidebar";
import Main from "./components/Main";


const user = {
  id: 1,
  name: 'Melissa',
  image: 'https://github.com/moonymel.png'
}


export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar user={user} />
        <Main />
      </div>
    </div>
  );
}
