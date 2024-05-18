import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ListRecipesComponent } from './recipes/list-recipes/list-recipes.component';
import { ItemRecipeComponent } from './recipes/list-recipes/item-recipe/item-recipe.component';
import { DetailsRecipeComponent } from './recipes/details-recipe/details-recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditeComponent } from './shopping-list/shopping-edite/shopping-edite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ListRecipesComponent,
    ItemRecipeComponent,
    DetailsRecipeComponent,
    ShoppingListComponent,
    ShoppingEditeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
