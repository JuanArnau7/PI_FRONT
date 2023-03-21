import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtredByOrder, getFilterByDiets, getTypes, orderByScore } from "../../redux/actions";
import './FiltradoStyle.css'

const Filtrado = ({setCurrentPage, setOrder}) => {
    
    const dispatch = useDispatch()
    
    const dietas = useSelector((state)=>state.types)
    useEffect(() => {
        dispatch(getTypes())
    },[dispatch])


    const handleOrdenName = (e) =>{
        e.preventDefault()
        dispatch(filtredByOrder(e.target.value))
        setCurrentPage(1)
        setOrder(`${e.target.value}`)
        
    }
        
    function handlerOrderDiet(evt){
        dispatch(getFilterByDiets(evt.target.value))
        setCurrentPage(1)
        setOrder(`${evt.target.value}`)
    }

    function handlerScoreHealth(evt){
        evt.preventDefault()
        dispatch(orderByScore(evt.target.value))
        setCurrentPage(1)
        setOrder(`${evt.target.value}`)
    }
    



    return (
        <div className='buttonordercontainer'>
            <div className="filtro-dieta">
            <h2 className="titulo-filtro">tipo de dieta:</h2>
                <select className='botones' onChange={handlerOrderDiet}>
                    
                    <option key="-1" value={-1} disabled>Ordenar por Dietas</option>
                        {dietas.map((d,i)=>
                        <option key={i} value={d.name}>{d.name}</option>
                        )}
                </select>
            </div>

            <div className="filtro-dieta">
                <h2 className="titulo-filtro">orden Alfabetico:</h2>
                <select  className='botones' onChange={handleOrdenName} name="ordenarAlfabeticamente">
                    <option  key="-1" value={-1} disabled>Orden Alfabetico</option>
                    <option key="0" value="up" >Ascendente: A-Z</option>
                    <option key="1" value="Descendente" >Descendente: Z-A</option>
                </select>
            </div>

            <div className="filtro-dieta">
                <h2 className="titulo-filtro">Indice de salud:</h2> 
                <select className='botones' onChange={handlerScoreHealth}>
                    <option key="-1" value={-1} disabled>Orden Score Health</option>
                    <option key="0" value="Descendente">Descendente</option>
                    <option key="1" value="Ascendente">Ascendente</option>
                </select>
            </div>
        </div>

    )
}

export default Filtrado


