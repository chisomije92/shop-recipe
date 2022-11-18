import { Component, OnInit, OnDestroy } from '@angular/core';
import { IngredientsModel } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients?: Observable<{ ingredients: IngredientsModel[] }>;
  private igChanged?: Subscription;

  constructor(
    private slService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: IngredientsModel[] } }>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    //this.ingredients = this.slService.getIngredients();
    //this.igChanged = this.slService.ingredientsChanged.subscribe(
    //  (ingredients: IngredientsModel[]) => {
    //    this.ingredients = ingredients;
    //  }
    //);
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.igChanged?.unsubscribe();
  }
}
