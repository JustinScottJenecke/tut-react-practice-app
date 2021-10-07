//import logo from './logo.svg';
import './App.css';

function Header(props) {
  return(
    <header>
      <h1>{props.name} Spaza</h1>
    </header>
  );
}

const menu = ["Slap Chips", "Samoosa", "Doughnuts", "Score", "Gebba"];

const menuItems = menu.map( (item, index) => (
  {id: index, title:item}
));

function Main (props) {
  return(
    <>
      <p>Menu:</p>
      <ul style={ { textAlign: "left" } }>
        {props.menuItems.map( element => (
          <li key={element.index}>{element.title}</li>
        ))}
      </ul>
    </>
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

function App() {
  return (
    <div className="App">
      <Header name="Joe's" />
      <Main menu={menuItems}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
 