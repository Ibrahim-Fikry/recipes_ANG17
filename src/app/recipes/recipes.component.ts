import { Component } from '@angular/core';
import { Recipe } from './RecipeModel';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {
SelecteRecipe?:Recipe;

}
