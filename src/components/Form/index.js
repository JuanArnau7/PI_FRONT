// import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  postRecipes, getTypes, getRecipesAll } from "../../redux/actions";
import './FormStyle.css'


function Formulario() {
    const [form , setForm] = useState({
        "name": "",
        "summary": "",
        "healthScore": "",
        "steps": "",
        "diets": []
    })
    const [error, setError] = useState({
        eName: '',
        eSummary: '',
        eHealthScore: '',
        eSteps: '',
        eDiets: ''
    })
    // HACER USE SELECTOR
    // use effect
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getRecipesAll())  
    }, [dispatch])
    useEffect(()=>{
        dispatch(getTypes())
    }, [dispatch])
    const nomGlobal = useSelector((state) => state.recipes)
    const nomGlobalUp = nomGlobal.map(a=>a.name.toUpperCase())
    const dietGlobal = useSelector((state) => state.types)

    const handleClickSubmit = (e)=>{
        e.preventDefault()
        dispatch(postRecipes(form))
        
        window.history.back()
    }
    const validacionName = (input) =>{
        
        if (input.length<5) {
            return 'El nombre debe contener al menos 5 caracteres';
        }
    
        if (!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'°,. ]+$/.test(input) && input !== ""){
            return 'Ingrese un Nombre válido para el plato, solo se aceptan letras';
        }
        
    
        if (nomGlobalUp.includes(input.toUpperCase())){
            return "nombre de actividad registrado"
        } 
        return ''
    }
    const validacionSummary = (input) =>{
        if (input.length<70) {
            return 'El resumen debe contener al menos 70 caracteres';
        }
        return ''
    }
    const validacionHealthScore = (input) =>{
        if (input<0) {
            return 'El HealthScore no puede ser negativo';
        }
        if (input>100) {
            return 'El HealthScore no puede superar el número 100';
        }
        return ''
    }
    const validacionSteps = (input) =>{

        if (input.length<30) {
            return 'El instructivo con los pasos debe contener al menos 30 caracteres';
        }
        return ''
    }
    const handleChange = (e)=>{
        
        if(e.target.name === "name") setError({...error, eName:(validacionName(e.target.value))})
        if(e.target.name === "summary") setError({...error, eSummary:(validacionSummary(e.target.value))})
        if(e.target.name === "healthScore") setError({...error, eHealthScore:(validacionHealthScore(e.target.value))})
        if(e.target.name === "steps") setError({...error, eSteps:(validacionSteps(e.target.value))})


        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleBorrarDiet = (e) =>{
        // console.log(e.target.name)
        if (e.target.name === form.diets)
            console.log("")
            setForm({
                ...form,
                diets: form.diets.filter((d)=>d !== e.target.name)
            })
    }

    const handleClickDiet = (e) => {
        if(!form.diets.includes(e.target.value))
        if(e.target.value !== "-1")
        setForm({
            ...form,
            [e.target.name]:[...form.diets, (e.target.value)]
        })
    }
    const desabilitado = (
        form.name.length &&
        form.summary.length &&
        form.healthScore.length &&
        form.steps.length&&
        form.diets.length&&
        !error.eName.length&&
        !error.eSummary.length&&
        !error.eHealthScore.length&&
        !error.eSteps.length&&
        !error.eDiets.length 
        );

    return (
        <div className="fondo-form">
            <form className="formulario-container" onSubmit={handleClickSubmit}>
            <h1><u>Formulario de creación</u></h1>
                
                <label className="titulos-form"><strong>Name:</strong></label>
                <input placeholder="enter the name..." className="formulario-input" type='text' name="name" onChange={e=>handleChange(e)}  ></input>
                {error && <p className="errores">{error.eName}</p>}

                <label className="titulos-form"><strong>Summary:</strong></label>
                <input placeholder="enter the resumen..." className="formulario-input-amplio" type='text' name="summary" onChange={e=>handleChange(e)}></input>
                {error && <p className="errores">{error.eSummary}</p>}
                
                <label className="titulos-form"><strong>HealthScore:</strong></label>
                <input placeholder="enter the healthscore" className="formulario-input" type='number' name="healthScore" onChange={e=>handleChange(e)}></input>
                {error && <p className="errores">{error.eHealthScore}</p>}
                
                <label className="titulos-form"><strong>Steps:</strong></label>
                <input placeholder="enter the steps..." className="formulario-input-amplio" type='text' name="steps" value={form.steps} onChange={e=>handleChange(e)}></input>
                {error && <p className="errores">{error.eSteps}</p>}
                                
                <label className="titulos-form"><strong>Diets:</strong></label>
                <select className="select-diets" onChange={handleClickDiet} name="diets">
                    <option  value={-1}>Select a diet</option>
                    {dietGlobal.map(d=>
                    <option  defaultValue="Select a diet" key= {d.id} value={d.name} >{d.name}</option>)}
                </select>
                        {form.diets != "" && <h3>The selected diets are:</h3>}
                    <ul>
                        {form.diets.map((v,i)=>

                        <li className="lista-diets" key={i}>{v} <button type="button" name={v} onClick={handleBorrarDiet}>x</button></li>
                        )}
                        
                    </ul>

                {/* <label>Agregue una imagen:</label> */}
                {/* <p>proximamente...</p> */}
                {(desabilitado) ? (
                    <button className="btnDisabled" type="submit" >Submit</button>) 
                    : 
                    (<button className="btnDisabled" disabled>Submit</button>)
                    }
            </form>

        </div>
    )
}

export default Formulario;