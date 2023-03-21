import React, { useEffect } from "react";
import { getRecipesDetail } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './DetailStyle.css'

function Detalle () {
    const dispatch = useDispatch();
    let {id} = useParams()
    
    useEffect(()=>{
        dispatch(getRecipesDetail(id))
    },[dispatch])

    const infoRecipes = useSelector((state) => state.detail)
    
    return (
        <body className="detail">

        <div className="detailContainer" >
        
            <div className="img-container">
                <img className="imagen" src={infoRecipes.image} alt='imagen'/>
            </div>
            <div className="contenedor-de-texto">
                <div className="name-container">
                    <h1><u>{infoRecipes.name}</u></h1>
                </div>
                <div className="types-container">
                    <h3><u>Tipo/s de plato:</u></h3>
                    <p><strong>"{infoRecipes.types + " "}"</strong></p>
                </div>
                <div className="diets-container">
                    <h3><u>Tipo/s de dieta:</u></h3>
                    <p>{infoRecipes.diets + " "}</p>
                </div>
                <div className="summary-container">
                    <h3><u><strong>Resumen del plato:</strong></u></h3>
                    <p dangerouslySetInnerHTML={{__html: infoRecipes.summary}}/>
                </div>
                <div className="healthScore-container">
                    <h3><u><strong>Health Score:</strong></u></h3>
                    <p>{infoRecipes.healthScore}/100</p>
                </div>
                <div className="pasos-container">
                    <h3><u>Pasos para la elaboración:</u></h3>
                    <p dangerouslySetInnerHTML={{__html: infoRecipes.steps}}/>
                </div>
            </div>

        <Link to="/home">
            <button className="b-back">Back to Home</button>
        </Link>
        </div>
        
        </body>
        )
}
export default Detalle;