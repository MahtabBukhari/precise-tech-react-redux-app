import {ActionTypes} from '../constantsType'


const initialState={
    products:[ ]
}

export const productReducer = (state=initialState,{type,payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:            //  0    +   payload       =    payload 
// as state{products:[]} when destructure then {products:[],products:payload}={products:payload}
            return {...state,products:payload};
        default:
            return state;
    }
  
}

export const selectedProductReducer =(state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload}
        default:
            return state;
    }
}
