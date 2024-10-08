import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ProductsState, ProductStateEnum } from 'src/app/ngrx/products.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit {

  productsState$:Observable<ProductsState> | null=null;

  readonly ProductStateEnum=ProductStateEnum

  constructor(
    private store:Store<any>
  ) { }

  ngOnInit(): void {
    this.productsState$=this.store.pipe(
      map((state)=> state.catalogState)
    )
  }

}
