import { Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { Ingrediants } from '../../Shared/Ingrediants';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
@ViewChild ("nameinpt",{static:true}) nameref?:ElementRef;
@ViewChild("countinpt",{}) countref?:ElementRef;
@Output() ingrediantadded? =new EventEmitter<Ingrediants>();
IngrediantsList:Ingrediants[]=[
  new Ingrediants('Apple',100),
  new Ingrediants('Pizza',150),
  new Ingrediants('Mango',60),
]
Adding(){
  const item = new Ingrediants( this.nameref?.nativeElement.value,this.countref?.nativeElement.value);
  debugger 
  this.IngrediantsList.push(item);                            
  

}
}
