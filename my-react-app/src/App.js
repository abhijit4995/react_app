import logo from '../src/assests/Manali.jpg';
import './App.css';
import Header from '../src/component/header.js';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <img src={logo}></img>
    </div>
    </>
  );
}

export default App;
