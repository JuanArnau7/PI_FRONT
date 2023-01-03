import React from "react";
import Card from "../Card";

function Paginado({recipes}){
    
    const mapeable = recipes
    return(

        <div>
                <div className='CardContainer'> 
            {mapeable && mapeable?.map((r,i) =>(
                        <Card key= {i}
                        id = {r.idApi}
                        name = {r.name}
                        image = {r.image}
                        dieta = {r.diets}
                        summary = {r.summary.replace(/<[^>]*>?/g,'')}
                        dish = {r.types}
                    />)
                    )} 
                </div>
    
    </div>
        
)}

export default Paginado