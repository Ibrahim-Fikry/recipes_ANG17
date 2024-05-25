import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingrediants } from '../../../Shared/Ingrediants';

@Component({
  selector: 'app-shopping-edite',
  templateUrl: './shopping-edite.component.html',
  styleUrl: './shopping-edite.component.scss'
})
export class ShoppingEditeComponent {
  @ViewChild ("nameinpt",{static:true}) nameref?:ElementRef;
  @ViewChild("countinpt",{}) countref?:ElementRef;
  @Output() ingrediantadded =new EventEmitter<Ingrediants>();
  
  Adding(){
    const item = new Ingrediants( this.nameref?.nativeElement.value,this.countref?.nativeElement.value);
    this.ingrediantadded?.emit(item);
                           
  }
  
}
