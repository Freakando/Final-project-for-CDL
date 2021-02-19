import React, {useState, useEffect} from "react";
import "./Product.scss";
import {Link} from "react-router-dom";

export const Product = () => {
    const [data, setData] = useState([]); // jak siciagasz tablicę to wstaw pustą tablicę

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(response => response.json())
            .then(element => {
                setData(element);
            }).catch(err => console.log(err));
    }, []);
    // console.log(data)

    return (
        <section className={"product-section"}>
            <div className={"product-outerBox"}>

                {data.map((element) => {
                    return (
                        <div className={"product-innerBox"}>
                            <Link to={"/singleproductpage/" + element.id}> <img className={"product-img"} src={element.url}></img></Link>
                            <a href={"#"}>
                                <div className={"product-name"}> {element.name}</div>
                            </a>
                            <a href={"#"}>
                                <div className={"product-price"}> {element.price}</div>
                            </a>
                        </div>)
                })}
            </div>

        </section>
    )
}

