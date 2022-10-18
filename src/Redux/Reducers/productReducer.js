import {ActionTypes} from '../constantsType'


const initialState={
    products:[ ]
}

export const productReducer = (state=initialState,{type,payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:            //  0    +   payload       =    payload 
// as state{products:[]} when destructure then {products:[],products:payload}={products:payload}
            return {...state,products:payload};

            case ActionTypes.DELETE_SELECTED_PRODUCT:
                const products=state.products.filter(product=> Number(product.id)!==Number(payload))
                console.log("filterProdcut",{...state,products})
                
                return{...state,products}
        default:
            return state;
    }
  
}

export const selectedProductReducer =(state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}
