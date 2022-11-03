import { EventEmitter } from '@angular/core';
import { IngredientsModel } from '../shared/ingredients.model';
import { RecipeModel } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();
  private recipes: RecipeModel[] = [
    new RecipeModel(
      'Tasty Schnitzel',
      'Awesome and delicious',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/800px-Hamburger_%28black_bg%29.jpg',
      [
        new IngredientsModel('Meat', 1),
        new IngredientsModel('French Fries', 20),
      ]
    ),
    new RecipeModel(
      'Big Fat Burger',
      'Juicy, tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1200px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      [new IngredientsModel('Buns', 2), new IngredientsModel('Meat', 2)]
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
