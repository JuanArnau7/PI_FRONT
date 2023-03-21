import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { searchBarName, getRecipesName } from '../../redux/actions/index'
import './SearchStyled.css'
function SearchBar () {
    
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [ocul, setOcul] = useState(true)
    const nCompleto = useSelector((state) => state.recipes)
    function handleClickInput (e) {
        e.preventDefault();
        setOcul(false)
    }
    // }
    function handleInput(e) {
        e.preventDefault();
        setName(e.target.value);
        dispatch(searchBarName(e.target.value))

    }
        function handleSubmit(e) {
            e.preventDefault();
            if(name){
                let nameC = nCompleto[0].name
                setName(nameC)
                dispatch(getRecipesName(nameC));
        }
    }
    return (
        <div className="searchbarContainer">
            <input className="inputAutocompletado" 
            value={name}
            type="text" 
            placeholder="Ingrese la receta..."
            onChange={e=>handleInput(e)}
            onClick={e=>handleClickInput(e)}
            />
            

            <button className="lupa" type='submit' aria-label="Search" disabled={!name} onClick={e=> handleSubmit(e)}> <svg aria-hidden='true' viewBox='0 0 20 20'>
            <path d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' />
            </svg>
            
            </button>
            
            {/* <ul>
                {nCompleto.map((r,i)=>
                    <p className='autocompletado' hidden={ocul} key={i}>{i<3&&r.name}</p>
                )}
            </ul> */}
            
            
        </div>
        )
}
export default SearchBar;