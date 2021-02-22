//import reset.scss
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import React from "react";
import {SingleProductSection} from "./components/productForm/SingleProductSection";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {HomePage} from "./components/homePage/HomePage";


const App = () => {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path={"/"}>
                        <HomePage/>
                    </Route>
                    <Route path="/singleproductpage/:id" component={SingleProductSection}/>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
