import { Injectable } from "@angular/core";
import { ProductService } from "../services/product.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { GetAllProductsActionError, GetAllProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess, ProductActionTypes } from "./products.action";

@Injectable()
export class ProductsEffects {
    constructor(
        private productService:ProductService,
        private effectsAction:Actions
    ) {}

    // Get All Products
    getAllProductsEffect:Observable<Action> = createEffect(
        () => this.effectsAction.pipe(
            ofType(ProductActionTypes.GET_ALL_PRODUCTS),
            mergeMap((action)=>{
                return this.productService.getProducts().pipe(
                    map((products)=> new GetAllProductsActionSuccess(products)),
                    catchError((error)=> of(new GetAllProductsActionError(error)))
                );
            })  
        )
    );

    // Get Selected Products
    getSelectedProductsEffect:Observable<Action> = createEffect(
        () => this.effectsAction.pipe(
            ofType(ProductActionTypes.GET_SELECTED_PRODUCTS),
            mergeMap((action)=>{
                return this.productService.getSelectedProducts().pipe(
                    map((products)=> new GetSelectedProductsActionSuccess(products)),
                    catchError((error)=> of(new GetSelectedProductsActionError(error)))
                );
            })  
        )
    );

}