import { EventEmitter } from '@angular/core';
import { IngredientsModel } from '../shared/ingredients.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<IngredientsModel[]>();
  ingredients: IngredientsModel[] = [
    new IngredientsModel('Apples', 5),
    new IngredientsModel('Tomatoes', 9),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientsModel) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientsModel[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
