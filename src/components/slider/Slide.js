import React from 'react';
import Slide from "./Slide.scss";


const Slide = ({ content }) => (
    <div style={{background: url('${content}')}}>hi</div>)

export default Slide;