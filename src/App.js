import logo from './logo.svg';
//import reset.scss
import './App.scss';
import {Header} from "./components/header/Header";
import {WelcomingSection} from "./components/welcomingSection/WelcomingSection"
function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-header">
          <WelcomingSection/>
        <p>
          ggg
        </p>
        <a
          className="App-link"
            target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section>
    </div>
  );
}

export default App;
