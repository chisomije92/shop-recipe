import { Subject } from 'rxjs';
import { IngredientsModel } from '../shared/ingredients.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<IngredientsModel[]>();
  startedEditing = new Subject<number>();

  ingredients: IngredientsModel[] = [
    new IngredientsModel('Apples', 5),
    new IngredientsModel('Tomatoes', 9),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: IngredientsModel) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientsModel[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
