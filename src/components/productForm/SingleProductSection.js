import React, {useEffect, useState } from "react";
import "./SingleProductSection.scss";
import {ProductForm} from "./ProductForm";



export const SingleProductSection = (props) => {
    const [extColor, setExtColor] = useState();
    const [data, setData] = useState({})

    useEffect(() => {
        fetch("http://localhost:3000/products/"+props.match.params.id)
            .then(response => response.json())
            .then(element => {
                return setData(element);
            }).catch(err => console.log(err));
    }, []);

    console.log(data.red);



    const handleTitleChange = (e) => {
       setExtColor(e.target.value);

    };

    const changeColor = (e) => {
        setExtColor(e.target.value);
        if (extColor === "lightblue") {
            document.getElementById("color").src= data.lightblue;
        } else if(extColor === "red") {
            document.getElementById("color").src= data.red;
        } else if(extColor === "black") {
            document.getElementById("color").src= data.black;
        } else if(extColor === "white") {
            document.getElementById("color").src= data.white;
        }
    }

    console.log(extColor);

    // const mergedEvents = (e) => {
    //     handleTitleChange(e);
    //     changeColor();
    // }

    return (
        <section className={"singleProduct--section"}>
            <div className={"singleProduct--outerBox"}>
                <div className={"singleProduct--innerBox"}>

                    <div className={"productPicture--outerBox"}>
                        <div className={"productPicture--innerBox"}>
                            <img src={data.url}/>
                            <img id="color" src={data.red} alt="djsnvk"/>
                        </div>
                    </div>

                    {/*<div className={"productForm--outerBox"}>*/}
                    {/*    <div className={"productForm--innerBox"}>*/}
                    {/*        /!*<ProductForm />*!/*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>

                <form>
                    <h1>{extColor}</h1>

                    <select value={extColor} onChange={changeColor}>
                        <option value="red">red</option>
                        {/*<option value={<img className={"product-img"} src={data[3].red}></img>}>white</option>*/}
                        <option value="lightblue">lightblue</option>
                        <option value="white">white</option>
                        <option value="black">black</option>
                    </select>
                </form>
            </div>
        </section>
    )
}

