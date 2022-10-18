import {ActionTypes} from '../constantsType';

export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}


export const selectedProduct=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}


export const removeSelectedProduct=()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
      
    }
}
export const DeleteSelectedProduct=(id)=>{
    return{
        type:ActionTypes.DELETE_SELECTED_PRODUCT,
        payload:id
      
    }
}