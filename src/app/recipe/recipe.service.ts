import { EventEmitter } from '@angular/core';
import { RecipeModel } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();
  private recipes: RecipeModel[] = [
    new RecipeModel(
      'A test Recipe',
      'This is a test',
      'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/16/sheet-pan-sweet-potato-fajitas.jpg'
    ),
    new RecipeModel(
      'Another test Recipe',
      'This is another test',
      'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/16/sheet-pan-sweet-potato-fajitas.jpg'
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
