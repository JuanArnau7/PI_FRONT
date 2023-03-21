import React from "react";
import { Link } from "react-router-dom";
import './CardStyle.css'

function Card ({ name, id, image, dieta}) {
    
    return (
        <div className="card">
            <div className="titulo">
                <h2><u>{name}</u></h2>
            </div>
            <img src={image} alt="imagen" className="ImagenC"/>
            <p>Dietas: {dieta.map(p => p +" ")} </p>
            <Link to={`/detail/${id}`}>
                <button className="boton-detalle"><u>Más información...</u></button>
            </Link>
        </div>
        )
}
export default Card;