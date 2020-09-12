import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private slService: ShoppingListService) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }
  // tslint:disable-next-line: typedef

}