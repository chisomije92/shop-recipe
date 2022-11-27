import { AppState } from './../../store-root/index';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { map, tap } from 'rxjs';
import * as RecipeActions from './../store/recipe.action';
import * as ShoppingListActions from './../../shopping-list/store/shopping-list.action';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe?: RecipeModel;
  id!: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.store
        .select('recipes')
        .pipe(
          map((recipeState) =>
            recipeState.recipes.find((recipe, index) => index === this.id)
          ),
          tap((recipe) => {
            if (!recipe) {
              this.router.navigate(['recipes']);
            }
          })
        )
        .subscribe((recipe) => {
          this.recipe = recipe;
        });
    });
  }

  onAddToShoppingList() {
    if (this.recipe) {
      this.store.dispatch(
        ShoppingListActions.addIngredients({
          ingredients: this.recipe.ingredients,
        })
      );
    }
  }

  onAddRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.store.dispatch(RecipeActions.deleteRecipe({ selectedIndex: this.id }));
    this.router.navigate(['/recipes']);
  }
}
