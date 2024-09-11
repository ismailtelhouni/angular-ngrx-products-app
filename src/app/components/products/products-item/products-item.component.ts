import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/model/product.model';
import { SelectProductAction } from 'src/app/ngrx/products.action';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() product:Product | null=null;

  constructor(
    private store:Store<any>
  ) { }

  ngOnInit(): void {
  }

  onSelect( product:Product ){
    this.store.dispatch(new SelectProductAction(product));
  }

}
