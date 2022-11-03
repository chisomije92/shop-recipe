import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes?: RecipeModel[];
  //recipes: RecipeModel[] = [
  //  new RecipeModel(
  //    'A test Recipe',
  //    'This is a test',
  //    'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/16/sheet-pan-sweet-potato-fajitas.jpg'
  //  ),
  //  new RecipeModel(
  //    'Another test Recipe',
  //    'This is another test',
  //    'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/16/sheet-pan-sweet-potato-fajitas.jpg'
  //  ),
  //];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe);
  }
}
