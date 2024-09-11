import { Injectable } from "@angular/core";
import { ProductService } from "../services/product.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { 
    GetAllProductsActionError, 
    GetAllProductsActionSuccess, 
    GetSelectedProductsActionError, 
    GetSelectedProductsActionSuccess, 
    ProductActionTypes, 
    ProductsAction, 
    SearchProductsActionError, 
    SearchProductsActionSuccess, 
    SelectProductActionError, 
    SelectProductActionSuccess
} from "./products.action";

@Injectable()
export class ProductsEffects {
    constructor(
        private productService:ProductService,
        private effectsAction:Actions
    ) {}

    // Get All Products
    getAllProductsEffect:Observable<ProductsAction> = createEffect(
        () => this.effectsAction.pipe(
            ofType(ProductActionTypes.GET_ALL_PRODUCTS),
            mergeMap((action:ProductsAction)=>{
                return this.productService.getProducts().pipe(
                    map((products)=> new GetAllProductsActionSuccess(products)),
                    catchError((error)=> of(new GetAllProductsActionError(error.message)))
                );
            })  
        )
    );

    // Get Selected Products
    getSelectedProductsEffect:Observable<ProductsAction> = createEffect(
        () => this.effectsAction.pipe(
            ofType(ProductActionTypes.GET_SELECTED_PRODUCTS),
            mergeMap((action:ProductsAction)=>{
                return this.productService.getSelectedProducts().pipe(
                    map((products)=> new GetSelectedProductsActionSuccess(products)),
                    catchError((error)=> of(new GetSelectedProductsActionError(error.message)))
                );
            })  
        )
    );

    // Search Products
    SearchProductsEffect:Observable<ProductsAction> = createEffect(
        () => this.effectsAction.pipe(
            ofType(ProductActionTypes.SEARCH_PRODUCTS),
            mergeMap((action:ProductsAction)=>{
                return this.productService.searchProducts(action.payload).pipe(
                    map((products)=> new SearchProductsActionSuccess(products)),
                    catchError((error)=> of(new SearchProductsActionError(error.message)))
                );
            })  
        )
    );

    // Select Products
    SelectProductEffect:Observable<ProductsAction> = createEffect(
        () => this.effectsAction.pipe(
            ofType(ProductActionTypes.SELECT_PRODUCTS),
            mergeMap((action:ProductsAction)=>{
                return this.productService.setSelected(action.payload).pipe(
                    map((product)=> new SelectProductActionSuccess(product)),
                    catchError((error)=> of(new SelectProductActionError(error.message)))
                );
            })  
        )
    );

}