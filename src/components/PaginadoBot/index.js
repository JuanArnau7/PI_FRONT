import React from "react";
import "./PaginadoBotStyle.css"


const PaginadoBot = ({totalRecipes, paginate}) => {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalRecipes / 9); i++){
        pageNumbers.push(i)
    }

    return (
        <div className="divisor">

        <nav>
                    {pageNumbers && pageNumbers.map((number, i)=>(
                            <button className="botones-container" key={i} onClick={()=>paginate(number)}>{number}</button>
                    ))}
        </nav>
        </div>
    )
}

export default PaginadoBot