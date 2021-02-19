// import React, {useEffect, useState} from "react";
// import "./ProductForm.scss";
//
//
//
//
//
// export const ProductForm = () => {
//     const [extColor, setExtColor] = useState("Choose exterior color");
//     const [data, setData] = useState([]);
//
//     // const handleTitleChange = (e) => {
//     //     setExtColor(e.target.value);
//     // };
//
//     useEffect(() => {
//         fetch("http://localhost:3000/products")
//             .then(response => response.json())
//             .then(element => {
//                 setData(element);
//             }).catch(err => console.log(err));
//     }, []);
//     // console.log(data[3].red)
//
//     return (
//         <form>
//             <h1>{extColor}</h1>
//
//             <select value={extColor} onChange={handleTitleChange}>
//                 <option value="Green">Ms</option>
//                 {/*<option value={<img className={"product-img"} src={data[3].red}></img>}>white</option>*/}
//                 <option value="Light Blue">Mr</option>
//             </select>
//         </form>
//     );
// };