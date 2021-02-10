import React, {useEffect, useState} from 'react';

const Nav = (props) => {
    const[showMenu, setShowMenu] = useState(true);
    const[isMobile, setIsMobile] = useState(true);

    const handleShowMenu = e => {
        e.preventDefault();
        setShowMenu(!showMenu);
    }

    useEffect( () =>{
        const query = window.matchMedia("(min-width:720px)");
        query.addListener( (e)=>{
            setIsMobile(!e.matches);
            setShowMenu(e.matches);
        });
    }, [])

    return (

        <nav>
            {isMobile && <a onClick={handleShowMenu}>Menu</a>}
            {showMenu  &&
                <ul>
                    <li><a href="">Link1</a></li>
                    <li><a href="">Link2</a></li>
                    <li><a href="">Link3</a></li>
                    <li><a href="">Link4</a></li>
                    <li><a href="">Link5</a></li>
                </ul>
            }
        </nav>
    );
}

export default Nav;