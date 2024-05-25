import { Component, EventEmitter, Output, output } from '@angular/core';
import { Recipe } from '../RecipeModel';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrl: './list-recipes.component.scss'
})
export class ListRecipesComponent {
  @Output() recipewasselected =new EventEmitter<Recipe>();
  
  
public RecipeList:Recipe[]=[
  new Recipe("recipe 1 name","rescipe 1 description",'../../../assets/images/recipe3.jpg'),
  new Recipe("recipe 2 name","rescipe 2 description","../../../assets/images/How-to-Calculate-Recipe-Costs-H-768x576.webp"),
  new Recipe("recipe 3 name","rescipe 3 description","../../../assets/images/recipe2.jpg"),
  new Recipe("recipe 3 name","rescipe 3 description","../../../assets/images/Untitled.jpg"),
  
]


OnRecipeSelected(rec:Recipe){
  this.recipewasselected.emit(rec);
}
}
