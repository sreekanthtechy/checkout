import { Food } from './Food';
export class CartItem {
  constructor(public food: Food) {}
  quantity: number = 1;
  price: number = this.food.price;
}

// export class CartItem1 {
//   food!: Food;
//   constructor(food: Food) {
//     this.food = food;
//   }
//   quantity: number = 1;
//   price: number = this.food.price;
// }
