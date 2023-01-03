import axios from 'axios'
import {GET_RECIPES, GET_DATABASE, GET_TYPES, GET_STATE_ID, GET_RECIPES_NAME, FILTRED_BY_ORDER, ORDER_BY_SCORE, FILTRED_BY_DIETS, FILTRED_BY_SEARCHBAR, POST_RECIPES} from './TypeActions'



export function getRecipesAll() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`/recipes`)
                return dispatch({
                    type : GET_RECIPES,
                    payload : res.data
                })
            
        } catch (error) {
            alert("Connection to /recipes Failed. ERROR:" + error)
        }
    }
}

export  function getTypes() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`/types`)
                return dispatch({
                    type: GET_TYPES,
                    payload: res.data
                })
        } catch (error) {
            alert ("Connection to /types Failed. ERROR:" + error)
        }
    }
}

export function getDataBase() {
    return async function(dispatch) {
        try {
            const res = await axios.get(`/recipes/dates`)
            return dispatch({
                type : GET_DATABASE,
                payload : res.data
            })
        } catch (error) {
            alert ("Connection to DataBase Failed. ERROR:" + error)
        }
    }
}
export function getRecipesDetail(id){
    return async function (dispatch) {
        try {
            const res =  await axios.get(`/recipes/${id}`)
            return dispatch({
                type: GET_STATE_ID,
                payload : res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function postRecipes(payload) {
    // console.log(payload)
    return async function(dispatch) {
        try {
            const res = await axios.post(`/recipe`, payload)
            dispatch({ type: POST_RECIPES, payload: res.payload });
            alert("Receta creada con Éxito")
            return res
        } catch (error) {
            alert ("Connection to /Post Failed. ERROR:" + error)
        }
    }
}

export function getRecipesName(name) {
    return async function(dispatch) {
        try {
            const recipes = await axios.get(`/recipes?name=${name}`)
            return dispatch({
                type: GET_RECIPES_NAME,
                payload: recipes.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function searchId(payload) {
    return {
        type: GET_STATE_ID,
        payload: payload
    }
}

export function searchBarName(payload) {
    return {
        type: FILTRED_BY_SEARCHBAR,
        payload: payload
    }
}


export function getFilterByDiets(payload) {
    return {
        type: FILTRED_BY_DIETS,
        payload: payload
    }
}

export function filtredByOrder(payload){
    return{
        type: FILTRED_BY_ORDER,
        payload: payload
    }
}

export function orderByScore(payload) {
    return{
        type: ORDER_BY_SCORE,
        payload: payload
    }
}