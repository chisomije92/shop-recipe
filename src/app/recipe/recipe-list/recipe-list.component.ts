import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel(
      'A test Recipe',
      'This is a test',
      'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/16/sheet-pan-sweet-potato-fajitas.jpg'
    ),
    new RecipeModel(
      'A test Recipe',
      'This is a test',
      'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/16/sheet-pan-sweet-potato-fajitas.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
