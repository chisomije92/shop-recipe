import { AppState } from './../../store-root/index';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { map } from 'rxjs';
import * as RecipeActions from './../store/recipe.action';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe?: RecipeModel;
  id!: number;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    //const id = this.route.snapshot.params['id']
    this.route.params
      //.pipe(
      //  filter((value: Params) => {
      //    const recipesLength = this.recipeService.getRecipe().length;
      //    if (+value['id'] > recipesLength) {
      //      this.router.navigate(['/recipes']);
      //      return false;
      //    }
      //    return true;
      //  })
      //)
      .subscribe((params: Params) => {
        this.id = +params['id'];
        //this.recipe = this.recipeService.getRecipeById(this.id);
        this.store
          .select('recipes')
          .pipe(
            map((recipeState) =>
              recipeState.recipes.find((recipe, index) => index === this.id)
            )
          )
          .subscribe((recipe) => {
            this.recipe = recipe;
          });
      });
  }

  onAddToShoppingList() {
    if (this.recipe) {
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
  }

  onAddRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    //this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    //this.recipeService.deleteRecipe(this.id);
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }
}
