import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";

export enum ProductActionTypes {
    // Get All Products
    GET_ALL_PRODUCTS="[Product] Get All Products",
    GET_ALL_PRODUCTS_SUCCESS="[Product] Get All Products Success",
    GET_ALL_PRODUCTS_ERROR="[Product] Get All Products Error",

    // Get Selected Products
    GET_SELECTED_PRODUCTS="[Product] Get Selected Products",
    GET_SELECTED_PRODUCTS_SUCCESS="[Product] Get Selected Products Success",
    GET_SELECTED_PRODUCTS_ERROR="[Product] Get Selected Products Error",

    // Search Products
    SEARCH_PRODUCTS="[Product] Search Products",
    SEARCH_PRODUCTS_SUCCESS="[Product] Search Products Success",
    SEARCH_PRODUCTS_ERROR="[Product] Search Products Error",

    // Select Product
    SELECT_PRODUCTS="[Product] Select Product",
    SELECT_PRODUCTS_SUCCESS="[Product] Select Product Success",
    SELECT_PRODUCTS_ERROR="[Product] Select Product Error",

    // Delete Product
    DELETE_PRODUCT="[Product] Delete Product",
    DELETE_PRODUCT_SUCCESS="[Product] Delete Product Success",
    DELETE_PRODUCT_ERROR="[Product] Delete Product Error",
}

// Get All Products
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

// Get Selected Products
export class GetSelectedProductsAction implements Action {
    type: ProductActionTypes = ProductActionTypes.GET_SELECTED_PRODUCTS;

    constructor(public payload:any) {}

}

export class GetSelectedProductsActionSuccess implements Action {
    type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS;

    constructor(public payload:Product[]) {}

}

export class GetSelectedProductsActionError implements Action {
    type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS_ERROR;

    constructor(public payload:string) {}

}

// Search products
export class SearchProductsAction implements Action {
    type: ProductActionTypes = ProductActionTypes.SEARCH_PRODUCTS;

    constructor(public payload:string) {}

}

export class SearchProductsActionSuccess implements Action {
    type: ProductActionTypes = ProductActionTypes.SEARCH_PRODUCTS_SUCCESS;

    constructor(public payload:Product[]) {}

}

export class SearchProductsActionError implements Action {
    type: ProductActionTypes = ProductActionTypes.SEARCH_PRODUCTS_ERROR;

    constructor(public payload:string) {}

}

// Select product
export class SelectProductAction implements Action {
    type: ProductActionTypes = ProductActionTypes.SELECT_PRODUCTS;

    constructor(public payload:Product) {}

}

export class SelectProductActionSuccess implements Action {
    type: ProductActionTypes = ProductActionTypes.SELECT_PRODUCTS_SUCCESS;

    constructor(public payload:Product) {}

}

export class SelectProductActionError implements Action {
    type: ProductActionTypes = ProductActionTypes.SELECT_PRODUCTS_ERROR;

    constructor(public payload:string) {}

}

// Delete product
export class DeleteProductAction implements Action {
    type: ProductActionTypes = ProductActionTypes.DELETE_PRODUCT;

    constructor(public payload:Product) {}

}

export class DeleteProductActionSuccess implements Action {
    type: ProductActionTypes = ProductActionTypes.DELETE_PRODUCT_SUCCESS;

    constructor(public payload:Product) {}

}

export class DeleteProductActionError implements Action {
    type: ProductActionTypes = ProductActionTypes.DELETE_PRODUCT_ERROR;

    constructor(public payload:string) {}

}

export type ProductsAction = 
    GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError | 
    GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError |
    SearchProductsAction | SearchProductsActionSuccess | SearchProductsActionError |
    SelectProductAction | SelectProductActionSuccess | SelectProductActionError |
    DeleteProductAction | DeleteProductActionSuccess | DeleteProductActionError
;