import { IngredientsModel } from '../shared/ingredients.model';

export class ShoppingListService {
  ingredients: IngredientsModel[] = [
    new IngredientsModel('Apples', 5),
    new IngredientsModel('Tomatoes', 9),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
}
