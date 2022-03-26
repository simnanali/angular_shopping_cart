import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartapiService } from 'src/app/service/cartapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public allProductsList: any;

  constructor(private _api: ApiService, private cartService: CartapiService) { }

  ngOnInit(): void {

    this._api.getAllProducts().subscribe(res => {
      this.allProductsList = res;

      this.allProductsList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price })
      });

    })
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

}
