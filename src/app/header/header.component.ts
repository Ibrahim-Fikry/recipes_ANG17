import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() featuerSelected=new EventEmitter<string>();
  OnSelect(Feature:string){
    this.featuerSelected.emit(Feature);
  }
}
