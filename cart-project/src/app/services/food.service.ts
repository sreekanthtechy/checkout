import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { sample_foods } from 'src/assets/data';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private json = '../../../assets/data.ts';
  constructor(private _http: HttpClient) {}
  getAll(): Food[] {
    return sample_foods;
  }
}
