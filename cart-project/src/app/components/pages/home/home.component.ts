import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { CartService } from 'src/app/services/cart.service';
import { Food } from 'src/app/shared/models/Food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(
    private _foodService: FoodService,
    private _cartService: CartService
  ) {}
  ngOnInit() {
    this.getFoods();
  }
  getFoods() {
    this.foods = this._foodService.getAll();
  }
  onFoodClick(food: Food) {
    this._cartService.addToCart(food);
  }
}
