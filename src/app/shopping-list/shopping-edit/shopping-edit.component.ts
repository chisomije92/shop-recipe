import { AppState } from './../store/index';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IngredientsModel } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListActions from '../store/shopping-list.action';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm!: NgForm;
  subscription?: Subscription;
  editMode = false;
  editedItemsIndex!: number;
  editedItem?: IngredientsModel;
  constructor(
    private slService: ShoppingListService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemsIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new IngredientsModel(value.name, value.amount);
    if (this.editMode) {
      //this.slService.updateIngredient(this.editedItemsIndex, newIngredient);
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredients({
          index: this.editedItemsIndex,
          ingredient: newIngredient,
        })
      );
    } else {
      //this.slService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    form.reset();
    this.editMode = false;
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    // this.slService.deleteIngredient(this.editedItemsIndex);
    this.store.dispatch(
      new ShoppingListActions.DeleteIngredients(this.editedItemsIndex)
    );
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
