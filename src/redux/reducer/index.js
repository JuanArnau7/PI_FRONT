// accion types que necesite:
import { GET_RECIPES, GET_TYPES, POST_RECIPES,  GET_STATE_ID,  GET_RECIPES_NAME,  FILTRED_BY_DIETS, ORDER_BY_SCORE, FILTRED_BY_SEARCHBAR, FILTRED_BY_ORDER } from '../actions/TypeActions'
// GET_DATABASE,GET_RECIPES_ID,FILTRED_BY_NAME,, GET_RECIPE_DETAIL
// estado inicial
const initialState = {
    recipes: [],
    recipesAll:[],
    detail: [],
    types: []
}

//acciones con switchs caso defaul 
export const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                recipesAll: action.payload
                
            }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload,
            }
            
        case POST_RECIPES:
            return{
                ...state,
            }
        case GET_STATE_ID:
            return{
                ...state,
                detail: action.payload
            }
        case GET_RECIPES_NAME:
            const addRecipe = state.recipesAll
            return {
                ...state,
                recipes: action.payload,
                recipesAll: addRecipe
            } 
        case FILTRED_BY_SEARCHBAR:
            const filtroSearch = state.recipesAll
            const filtradoDelStado = filtroSearch.filter((recipe)=>{
                let nombre = recipe.name.toLowerCase();
                let nombre1 = recipe.name
                let nombre2 = recipe.name.toUpperCase();
                if (nombre.includes(action.payload)) return recipe;
                if (nombre1.includes(action.payload)) return recipe;
                if (nombre2.includes(action.payload)) return recipe;
            })
            // const filtradoDelStado = filtroSearch.filtroSearch.map((r)=>{
            //     let name =r.name.toLowerCase();
            //     if (name.includes(action.payload)) return r;
            // })
            return {
                ...state,
                recipes: filtradoDelStado
            }
        case ORDER_BY_SCORE:
            const health = state.recipesAll.filter(e=> e.healthScore > 0)
            // console.log(health)
            const recetasPorScore = action.payload ==='Ascendente'? health.sort((a,b)=> {
                    return a.healthScore - b.healthScore
                }) : health.sort((a,b) => {
                    return b.healthScore - a.healthScore
                })
            // console.log(recetasPorScore)
                return {
                    ...state,
                    recipes: recetasPorScore
                }
        case FILTRED_BY_DIETS:
            const todasRecetas = state.recipesAll
            const filtradoPorDietas = action.payload === 'Filtred by type' ? 
            state.recipesAll : todasRecetas.filter(receta => {
                
                if(receta.diets.length > 0){
                    if(receta.diets.find(e => e === action.payload))return receta
                }
                if((action.payload === 'vegetarian')&& (receta.hasOwnProperty('vegetarian'))&& (receta.vegetarian === true)) return receta
                if((action.payload === 'dairyFree')&& (receta.hasOwnProperty('dairyFree'))&& (receta.dairyFree === true)) return receta
                if((action.payload === 'gluten free')&& (receta.hasOwnProperty('gluten free'))&& (receta.glutenFree === true)) return receta
                if((action.payload === 'paleolithic')&& (receta.hasOwnProperty('paleolithic'))&& (receta.paleolithic === true)) return receta
                if((action.payload === 'lacto ovo vegetarian')&& (receta.hasOwnProperty('lacto ovo vegetarian'))&& (receta.lactoOvoVegetarian === true)) return receta
                if((action.payload === 'vegan')&& (receta.hasOwnProperty('vegan'))&& (receta.vegan === true)) return receta
                if((action.payload === 'pescatarian')&& (receta.hasOwnProperty('pescatarian'))&& (receta.pescatarian === true)) return receta
                if((action.payload === 'primal')&& (receta.hasOwnProperty('primal'))&& (receta.primal === true)) return receta
                if((action.payload === 'whole 30')&& (receta.hasOwnProperty('whole 30'))&& (receta.whole30 === true)) return receta
                if((action.payload === 'fodmap friendly')&& (receta.hasOwnProperty('fodmap friendly'))&& (receta.fodmapFriendly === true)) return receta
                // es por aca mi negro imprimi recetas y fijate como manejarlo jaja suerte
                console.log(receta)
            })
            return {
                ...state,
                recipes: filtradoPorDietas
            }
        case FILTRED_BY_ORDER:
            const recypesByOrder = action.payload === 'up' ? state.recipesAll.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                    else return -1
                }): state.recipesAll.sort((a, b) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                        else return -1
                })
                return{
                    ...state,
                    recipes: recypesByOrder
            }           
        default:
            return state
        }
        
    }
