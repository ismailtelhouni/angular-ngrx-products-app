import { Product } from "../model/product.model";
import { ProductActionTypes, ProductsAction } from "./products.action";

export enum ProductStateEnum {
    LOADING = "Loading",
    LOADED = "Loaded", 
    ERROR = "Error",
    INITIAL = "Initial"
}

export interface ProductsState {
    products: Product[],
    errorMessage: string,
    dataState: ProductStateEnum
}

const initialState: ProductsState = {
    products: [],
    errorMessage: "",
    dataState: ProductStateEnum.INITIAL
}

export function productsReducer(state:ProductsState=initialState , action:ProductsAction):ProductsState{
    switch(action.type){
        case ProductActionTypes.GET_ALL_PRODUCTS:
            return {...state, dataState: ProductStateEnum.LOADING};
        case ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS:
            return {...state, dataState: ProductStateEnum.LOADED, products: action.payload};
        case ProductActionTypes.GET_ALL_PRODUCTS_ERROR:
            return {...state, dataState: ProductStateEnum.ERROR, errorMessage: action.payload};
        default:
            return {...state};  
    }
}