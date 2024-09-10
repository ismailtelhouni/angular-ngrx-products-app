import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";

export enum ProductActionTypes {
    GET_ALL_PRODUCTS="[Product] Get All Products",
    GET_ALL_PRODUCTS_SUCCESS="[Product] Get All Products Success",
    GET_ALL_PRODUCTS_ERROR="[Product] Get All Products Error",
}

export class GetAllProductsAction implements Action {
    type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS;

    constructor(public payload:any) {}

}

export class GetAllProductsActionSuccess implements Action {
    type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS;

    constructor(public payload:Product[]) {}

}

export class GetAllProductsActionError implements Action {
    type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS_ERROR;

    constructor(public payload:string) {}

}

export type ProductsAction = GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError;