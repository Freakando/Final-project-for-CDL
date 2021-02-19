import React, {useState} from 'react';
import "./Slider.scss";
import SliderContent from "./SlyderContent";


export const Slider = () => {
    const [counter, setCounter] = useState(10);

    const add = () => {
        setCounter(prevState => prevState + 1)
    };

    const decrease = () => {
        setCounter(prevState => prevState - 1)
    };

    const reset = () => {
        setCounter(10)
    };


     return <>
         <h1>Liczba kliknięć {counter}</h1>
         <button onClick={add}>+</button>
         <button onClick={decrease}>-</button>
         <button onClick={reset}>RESET</button>

     </>


}
// const Slider = () => {
//     const getWidth = () => window.innerWidth
//
//     const [state, setState] = useState({
//         translate: 0,
//         transition: 0.45
//     })
//
//     const { translate, transition } = state
//
//     return (
//         <div className={"slider-parentLvl"}>
//             <SliderContent
//                 translate={translate}
//                 transition={transition}
//                 width={getWidth()}/>
//         </div>)
// };


export default Slider;