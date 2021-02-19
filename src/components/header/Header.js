import {Link} from "react-router-dom";
import Nav from "./Nav";
import React from "react";
import("./Header.scss");


export const Header = () =>
    <header className={"header--header"}>

        <Link to="/"><div className={"logo"}> </div></Link>
        {/*<img className={"logo"} src= "../../src/static/images/logo192.png" alt={"logo"}/>*/}
        <Nav />

    </header>
