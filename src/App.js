
//import reset.scss
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Header} from "./components/header/Header";
import {OpeningSection} from "./components/openingSection/OpeningSection"
import {Footer} from "./components/footer/Footer";
import React from "react";
import {Slider} from "./components/slider/Slider";
import {Product} from "./components/product/Product";

const App = () => {
  return (
    <div className="App">
      <Header />
      <OpeningSection />
      <Slider />
      <section className="App-header">


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
        <Product />

      <Footer />
    </div>
  );
}

export default App;
