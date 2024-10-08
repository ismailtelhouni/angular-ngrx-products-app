import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllProductsAction, GetSelectedProductsAction, SearchProductsAction } from 'src/app/ngrx/products.action';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  constructor(
    private store:Store<any>
  ) { }

  ngOnInit(): void {
  }

  onGetAllProducts(){
    this.store.dispatch(new GetAllProductsAction({}));
  }

  onGetSelectedProducts(){
    this.store.dispatch(new GetSelectedProductsAction({}));
  }

  onSearch(data:any){
    console.log(data.keyword);
    this.store.dispatch(new SearchProductsAction(data.keyword));
  }

}
