//import logo from './logo.svg';
import './App.css';

function Header(props) {
  return(
    <header>
      <h1>{props.name} Spaza</h1>
    </header>
  );
}

function Main (props) {
  return(
    <div>
      <p>Menu:</p>
      <ul style={ { textAlign: "left" } }>
        {props.menu.map(element => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
}

function Footer(props) {
  return(
    <h3>
      Address: 12 Symphony Way, UWC Main Campus.<br/>
      Copyright {props.year}
    </h3>
  );
}

const menu = ["Slap Chips", "Samoosa", "Doughnuts", "Score", "Gebba"];

function App() {
  return (
    <div className="App">
      <Header name="Joe's" />
      <Main menu={menu}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
 