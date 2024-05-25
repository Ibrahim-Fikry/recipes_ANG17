import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';
import { Recipe } from './../../RecipeModel';

@Component({
  selector: 'app-item-recipe',
  templateUrl: './item-recipe.component.html',
  styleUrl: './item-recipe.component.scss'
})
export class ItemRecipeComponent {
@Input() Recipeitem?:Recipe;

}
