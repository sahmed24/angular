import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  // Assigning a type to the initial recipes array. 
  // Here the type will be an array of Recipe (our model).
  // Using the new keyword to create a new object based on our recipe model.
  // When executing this as a method, we're calling the constructor and pass the arguments that we had set there in model class.
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test Recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2023/09/Prawn-harissa-spaghetti--b3b0fdd.jpg?quality=90&webp=true&resize=600,545'),
    new Recipe('A Test Recipe', 'This is a test Recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2023/09/Prawn-harissa-spaghetti--b3b0fdd.jpg?quality=90&webp=true&resize=600,545')
  ];

  constructor(){

  }

}
