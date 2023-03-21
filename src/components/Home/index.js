import './HomeStyle.css'
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getRecipesAll, getTypes } from '../../redux/actions';
import SearchBar from '../SearchBar'
import { Link } from 'react-router-dom';
import Paginado from '../Paginado/index'
import PaginadoBot from '../PaginadoBot'
import Filtrado from '../Filtrado';

function Home() {
    const dispatch = useDispatch();

    const recipes = useSelector((state)=>state.recipes)

    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState('')
    useEffect(()=>{
        dispatch(getRecipesAll())        
    },[dispatch])

    useEffect(()=>{
        dispatch(getTypes())
    }, [dispatch])

    const indexOfLastRecipe = currentPage * 9
    const indexOfFirstRecipe = indexOfLastRecipe - 9
    const currentRecipe = recipes.length ? recipes.slice(indexOfFirstRecipe, indexOfLastRecipe) : []

    const paginate = (pageNumbers) => setCurrentPage(pageNumbers)

    

    return (

        <div className='Container'>
            <SearchBar/> 
            <div className='buttonFormCreacion'>
                <Link to='/create'>
                    <button className='boton-Formulario'>Formulario de Creación</button>
                </Link>
            </div>
            <div className='Botones-Filtrado'>
                <Filtrado recipes={currentRecipe} setOrder={setOrder} setCurrentPage={setCurrentPage}></Filtrado>
            </div>
            <div>
                <div className='botones-paginado'>
                    <PaginadoBot totalRecipes={recipes.length} paginate={paginate}></PaginadoBot>
                </div>
                <Paginado  recipes={currentRecipe}></Paginado>
                <div className='botones-paginado'>
                    <PaginadoBot totalRecipes={recipes.length} paginate={paginate}></PaginadoBot>
                </div>
            </div>
            <footer>
                <p className='futer'>Developed by <a href='https://www.linkedin.com/in/juanarnau7/'>JuanArnau7</a> </p>
            </footer>
        <br></br>
        </div>
    )    
}

export default Home;