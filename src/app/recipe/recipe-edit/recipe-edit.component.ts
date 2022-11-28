import { Store } from '@ngrx/store';
import { map, Subscription, tap } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppState } from 'src/app/store-root';
import * as RecipeActions from './../store/recipe.action';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id!: number;
  editMode = false;
  recipeForm!: FormGroup;
  private storeSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
      this.store
        .select('recipes')
        .pipe(
          tap((recipeState) => {
            if (this.id >= recipeState.recipes.length) {
              this.router.navigate(['recipes']);
            }
          })
        )
        .subscribe();
    });
  }

  get recipeFormGroup() {
    return this.recipeForm?.get('ingredients') as FormArray;
  }

  onSubmit() {
    if (this.editMode) {
      this.store.dispatch(
        RecipeActions.updateRecipe({
          index: this.id,
          newRecipe: this.recipeForm.value,
        })
      );
    } else {
      this.store.dispatch(
        RecipeActions.addRecipe({ recipe: this.recipeForm.value })
      );
    }
    this.onCancel();
  }

  onAddIngredient() {
    this.recipeFormGroup.push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray<any>([]);
    if (this.editMode) {
      this.storeSub = this.store
        .select('recipes')
        .pipe(
          map((recipeState) =>
            recipeState.recipes.find((recipe, index) => index === this.id)
          )
        )
        .subscribe((recipe) => {
          if (recipe) {
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe['ingredients']) {
              for (let ingredient of recipe.ingredients) {
                recipeIngredients.push(
                  new FormGroup({
                    name: new FormControl(ingredient.name, Validators.required),
                    amount: new FormControl(ingredient.amount, [
                      Validators.required,
                      Validators.pattern(/^[1-9]+[0-9]*$/),
                    ]),
                  })
                );
              }
            }
          }
        });
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteIngredient(index: number) {
    this.recipeFormGroup.removeAt(index);
  }

  ngOnDestroy(): void {
    if (this.storeSub) this.storeSub.unsubscribe();
  }
}
