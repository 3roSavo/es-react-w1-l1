import logo from './logo.svg';
import './App.css';
import RandomParagraph from './components/randomParagraph';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <RandomParagraph yourComment="che bello che è React!!"/>
        <ButtonComponent buttonText="CLICCAMI"/>
        <ButtonComponent buttonText="Ciaonee"/>
        <ImageComponent urlImage="http://placekitten.com/400" altImage="foto di gattino"/>
        <ImageComponent urlImage="https://placedog.net/400" altImage="foto di cagnolino" />
      </header>
    </div>
  );
}

export default App;
