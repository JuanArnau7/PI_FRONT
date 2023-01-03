import React from "react";
import { Link } from "react-router-dom";
import './CardStyle.css'

function Card ({ name, id, image, dieta}) {
    
    return (
        <div className="card">
            <h2 className="titulo"><u>Titulo del plato:</u> 
            <br></br>
            {name}</h2>
            <img src={image} alt="imagen" className="ImagenC"/>
            <p><b>Dieta: {dieta}</b></p>
            <br></br>
            <Link to={`/detail/${id}`}>
                <button className="boton-detalle"><u>DETALLE</u></button>
            </Link>
        </div>
        )
}
export default Card;