import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart!: Cart;
  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.getCarObservable().subscribe((cartData) => {
      this.cart = cartData;
      console.log(this.cart, 'from');
    });
  }
  onAddClick(item: Food) {
    console.log(item);
    this._cartService.addToCart(item);
  }
  onSubClick(item: Food) {
    this._cartService.removeItem(item);
  }
}
