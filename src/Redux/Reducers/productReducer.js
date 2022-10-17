import {ActionTypes} from '../constantsType'


const initialState={
    products:[ ]
}

const productReducer = (state=initialState,{type,payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:            //  0    +   payload       =    payload 
// as state{products:[]} when destructure then {products:[],products:payload}={products:payload}
            return {...state,products:payload};
        default:
            return state;
    }
  
}

export default productReducer
