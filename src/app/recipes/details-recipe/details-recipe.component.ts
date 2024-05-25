import { Component, Input } from '@angular/core';
import { Recipe } from '../RecipeModel';

@Component({
  selector: 'app-details-recipe',
  templateUrl: './details-recipe.component.html',
  styleUrl: './details-recipe.component.scss'
})
export class DetailsRecipeComponent {
@Input() recepiecoming ?:Recipe;
}
