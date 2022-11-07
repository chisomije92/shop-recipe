import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IngredientsModel } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInputRef', {
    static: false,
  })
  nameInputRef?: ElementRef;

  @ViewChild('amountInputRef', {
    static: false,
  })
  amountInputRef?: ElementRef;
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}
  onAddItem() {
    const ingName = this.nameInputRef!.nativeElement.value;
    const amtName = this.amountInputRef!.nativeElement.value;
    if (!ingName.length || !amtName.length) {
      return;
    }
    const newIngredient = new IngredientsModel(ingName, amtName);
    this.slService.addIngredient(newIngredient);
  }
}
