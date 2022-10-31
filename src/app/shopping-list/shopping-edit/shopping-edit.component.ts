import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { IngredientsModel } from 'src/app/shared/ingredients.model';

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
  constructor() {}

  @Output() ingredientAdded = new EventEmitter<IngredientsModel>();

  ngOnInit(): void {}
  onAddItem() {
    const ingName = this.nameInputRef?.nativeElement.value;
    const amtName = this.amountInputRef?.nativeElement.value;
    const newIngredient = new IngredientsModel(ingName, amtName);
    console.log(newIngredient);
    this.ingredientAdded.emit(newIngredient);
  }
}
