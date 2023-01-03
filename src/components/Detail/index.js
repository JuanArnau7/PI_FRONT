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

        <div className="detailContainer" id="root">
        
            <h1 color="white"><u><b>Detalle:</b></u></h1>
            <div className="name-container">
                <h3><u>{infoRecipes.name}</u></h3>
            </div>
            <div className="img-container">
                <img className="imagen" src={infoRecipes.image} alt='imagen'/>
            </div>
            <div className="types-container">
                <p><strong><u>Tipo/s de plato:</u> "{infoRecipes.types}"</strong></p>
            </div>
            <div className="diets-container">
                <p><u>Tipo/s de dieta:</u> {infoRecipes.diets}</p>
            </div>
            <div className="summary-container">
                <p><u><strong>Resumen del plato:</strong></u></p>
                <p dangerouslySetInnerHTML={{__html: infoRecipes.summary}}/>
            </div>
            <div className="healthScore-container">
                <p><u><strong>Health Score:</strong></u> {infoRecipes.healthScore}</p>
            </div>
            <div className="pasos-container">
                <p><u>Pasos para la elaboración:</u></p>
                <p dangerouslySetInnerHTML={{__html: infoRecipes.steps}}/>
            </div>
        <Link to="/home">
            <button className="b-back">Back to Home</button>
        </Link>
        </div>
        
        </body>
        )
}
export default Detalle;