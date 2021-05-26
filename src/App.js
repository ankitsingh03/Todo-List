import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import List from "./components/List";
// import Pradeep from "./components/Pradeep";
import './components/style.css'


function App() {
  return (
    <div className="App container font">
      <Home  />
      <List />
      {/* <Pradeep /> */}
    </div>
  );
}

export default App;
