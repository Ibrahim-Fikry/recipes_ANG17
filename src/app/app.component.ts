import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipe';
  LoadedFeature:string="Recipe"
  OnNavigat(feature:string){
    this.LoadedFeature=feature;
  }
}
