import React, {useEffect, useState } from "react";
import "./SingleProductSection.scss";




export const SingleProductSection = (props) => {
    // const [extColor, setExtColor] = useState("white");
    const [extColor, setExtColor] = useState(0);
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/products/"+props.match.params.id)
            .then(response => response.json())
            .then(element => {
                console.log(element);
                setData(element);
            }).catch(err => console.log(err));
    }, []);


    // const handleTitleChange = (e) => {
    //    setExtColor(e.target.value);
    //
    // };

    const changeColor = (e) => {
        setExtColor(e.target.value);
        // if (e.target.value === "lightblue") {
        //     document.getElementById("color").src= data.lightblue;
        // } else if(e.target.value === "red") {
        //     document.getElementById("color").src= data.red;
        // } else if(e.target.value === "black") {
        //     document.getElementById("color").src= data.black;
        // } else if(e.target.value === "white") {
        //     document.getElementById("color").src= data.white;
        // }
    }

    console.log(extColor);

    // const mergedEvents = (e) => {
    //     handleTitleChange(e);
    //     changeColor();
    // }

    if(!data) return <div>Loading....</div>;

    return (
        <section className={"singleProduct--section"}>
            <div className={"singleProduct--outerBox"}>
                <div className={"singleProduct--innerBox"}>

                    <div className={"productPicture--outerBox"}>
                        <div className={"productPicture--innerBox"}>
                            <img className={"sglPageProd-picture"} src={data.url}/>                            <img id="color" src={data.colors[extColor].image} alt="djsnvk"/>
                        </div>
                    </div>

                    {/*<div className={"productForm--outerBox"}>*/}
                    {/*    <div className={"productForm--innerBox"}>*/}
                    {/*        /!*<ProductForm />*!/*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>

                <form className={"form-box"}>
                    {/*<h1>{extColor}</h1>*/}
                    <h1>{data.colors[extColor].name}</h1>

                    <select value={extColor} onChange={changeColor}>
                        {/*<option value="red">red</option>*/}
                        {/*<option value={<img className={"product-img"} src={data[3].red}></img>}>white</option>*/}
                        {/*<option value="lightblue">lightblue</option>*/}
                        {/*<option value="white">white</option>*/}
                        {/*<option value="black">black</option>*/}
                        {data.colors.map( (color, index) => <option value={index}>{color.name}</option>)}
                    </select>
                </form>
            </div>
        </section>
    )
}

