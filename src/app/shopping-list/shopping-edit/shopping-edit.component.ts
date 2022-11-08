import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IngredientsModel } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  amountInputRef?: ElementRef;
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new IngredientsModel(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }
}
