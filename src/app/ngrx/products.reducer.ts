import { Action } from "@ngrx/store";
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

export function productsReducer(state:ProductsState=initialState , action:Action):ProductsState{
    switch(action.type){
        
        // Get All Products
        case ProductActionTypes.GET_ALL_PRODUCTS:
            return {...state, dataState: ProductStateEnum.LOADING};
        case ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS:
            return {...state, dataState: ProductStateEnum.LOADED, products: (<ProductsAction>action).payload};
        case ProductActionTypes.GET_ALL_PRODUCTS_ERROR:
            return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductsAction>action).payload};
        
        // Get Selected Products
        case ProductActionTypes.GET_SELECTED_PRODUCTS:
            return {...state, dataState: ProductStateEnum.LOADING};
        case ProductActionTypes.GET_SELECTED_PRODUCTS_SUCCESS:
            return {...state, dataState: ProductStateEnum.LOADED, products: (<ProductsAction>action).payload};
        case ProductActionTypes.GET_SELECTED_PRODUCTS_ERROR:
            return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductsAction>action).payload};
        
        // Search Products
        case ProductActionTypes.SEARCH_PRODUCTS:
            return {...state, dataState: ProductStateEnum.LOADING};
        case ProductActionTypes.SEARCH_PRODUCTS_SUCCESS:
            return {...state, dataState: ProductStateEnum.LOADED, products: (<ProductsAction>action).payload};
        case ProductActionTypes.SEARCH_PRODUCTS_ERROR:
            return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductsAction>action).payload};

        // Select Product
        case ProductActionTypes.SELECT_PRODUCTS:
            return {...state, dataState: ProductStateEnum.LOADING};
        case ProductActionTypes.SELECT_PRODUCTS_SUCCESS:
            let product:Product = (<ProductsAction>action).payload;
            let listProducts = [...state.products];
            let data:Product[]=listProducts.map(p=>p.id==product.id?product:p);
            return {...state, dataState: ProductStateEnum.LOADED, products: data };
        case ProductActionTypes.SELECT_PRODUCTS_ERROR:
            return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductsAction>action).payload};
        
        // Delete Product
        case ProductActionTypes.DELETE_PRODUCT:
            return {...state, dataState: ProductStateEnum.LOADING};
        case ProductActionTypes.DELETE_PRODUCT_SUCCESS:
            let p:Product = (<ProductsAction>action).payload;
            let index = state.products.indexOf(p);
            let productslist = [...state.products];
            productslist.splice(index,1);
            return {...state, dataState: ProductStateEnum.LOADED, products: productslist };
        case ProductActionTypes.DELETE_PRODUCT_ERROR:
            return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductsAction>action).payload};

            default:
            return {...state};  
    }
}