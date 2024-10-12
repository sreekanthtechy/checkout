import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { User } from '../shared/models/User';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
const CART_KEY = 'Cart';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartDataFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {}

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) {
      cartItem.quantity++;
      cartItem.price = cartItem.food.price * cartItem.quantity;

      this.setCartToLocalStorage();
      return;
    }
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }
  setCartToLocalStorage() {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );
    let cartJson = JSON.stringify(this.cart);
    localStorage.setItem(CART_KEY, cartJson);
    this.cartSubject.next(this.cart);
  }
  getCartDataFromLocalStorage() {
    const cartJson = localStorage.getItem(CART_KEY);
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }

  removeItem(items: Food) {
    let index = this.cart.items.findIndex((item) => items.id == item.food.id);
    let cartItem = this.cart.items[index];
    cartItem.quantity--;
    this.cart.items[index].price = cartItem.food.price * cartItem.quantity;
    if (this.cart.items[index].quantity === 0) {
      this.cart.items.splice(index, 1);
    }
    this.setCartToLocalStorage();
  }

  getCarObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }
}