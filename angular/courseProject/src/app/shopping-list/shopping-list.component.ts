import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('garlic clove', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('broccoli',1),
    new Ingredient('cheese',1)
  ];

  constructor(){
    
  }
}
