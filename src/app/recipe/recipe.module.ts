import { SharedModule } from './../shared/shared.module';
import { RecipeRoutingModule } from './recipe-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeComponent } from './recipe.component';

@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
  ],
  imports: [SharedModule, ReactiveFormsModule, RecipeRoutingModule],
})
export class RecipeModule {}