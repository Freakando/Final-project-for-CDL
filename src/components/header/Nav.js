import React, {useEffect, useState} from 'react';
import "./Nav.scss";
import {Header} from "./Header";

const Nav = (props) => {
    const[showMenu, setShowMenu] = useState(false);
    // const[isMobile, setIsMobile] = useState(true);

    const handleShowMenu = e => {
        e.preventDefault();
        setShowMenu(!showMenu);
    }

    // useEffect( () =>{
    //     const query = window.matchMedia("(min-width:720px)");
    //     query.addListener( (e)=>{
    //         setIsMobile(!e.matches);
    //         setShowMenu(e.matches);
    //     });
    // }, [])

    return (

        <nav className={"main-nav"}>
            <a onClick={handleShowMenu} className={"mobile-menu-btn"}>Menu</a>
            <ul className={showMenu ? "showNav" : "hideNav"}>
                <li><a href="#" className={"nav__link"}>Meble</a></li>
                <li><a href="#" className={"nav__link"}>Pomieszczenia</a></li>
                <li><a href="#" className={"nav__link"}>Usługi</a></li>
                <li><a href="#" className={"nav__link"}>Kontakt</a></li>
                <li><a href="#" className={"nav__link"}>Koszyk</a></li>
            </ul>

        </nav>
    );
}

export default Nav;