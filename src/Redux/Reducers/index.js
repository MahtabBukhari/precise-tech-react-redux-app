import {combineReducers } from 'redux';
import { updateSelectedProduct } from '../Actions/productActions';
import {productReducer,selectedProductReducer} from './productReducer';



export const  rootReducer = combineReducers({

      allProducts:productReducer,
      product:selectedProductReducer,
      updateProduct:updateSelectedProduct
      

}) 