import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaPinterest} from "react-icons/fa";
import React from "react";

import("./Footer.scss");


export const Footer = () =>
    <footer className={"footer--section"}>

        <div>
            <div className={"icon--box"}>
                <ul className={"icon--list"}>
                    <li><a href="#"  className={"fb-icon"}><FaFacebook /></a></li>
                    <li><a href="#" className={"inst-icon"}><FaInstagram /></a></li>
                    <li><a href="#" className={"pint-icon"}><FaPinterest /></a></li>
                </ul>
            </div>
            <div className={"info--outsideBox"}>
                <div className={"info--insideBox"}>
                    <ul className={"icon--list"}>
                        <li>About</li>
                        <li>User account</li>
                        <li>Safe shopping</li>
                        <li>Free delivery</li>
                        <li>Contact</li>
                        <li>Work with us</li>
                    </ul>
                </div>
            </div>


            <div className={"devInfo--box"}></div>

        </div>

    </footer>
