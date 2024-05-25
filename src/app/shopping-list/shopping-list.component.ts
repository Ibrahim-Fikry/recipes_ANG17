import { Component } from '@angular/core';
import { Ingrediants } from '../../Shared/Ingrediants';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
IngrediantsList:Ingrediants[]=[
  new Ingrediants('Apple',100),
  new Ingrediants('Pizza',150),
  new Ingrediants('Mango',60),
]
}
