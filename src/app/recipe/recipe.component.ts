import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService],
})
export class RecipeComponent implements OnInit {
  selectedRecipe: RecipeModel | undefined;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: RecipeModel) => {
      this.selectedRecipe = recipe;
    });
  }
}
