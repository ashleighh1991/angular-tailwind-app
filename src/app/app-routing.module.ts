import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailDescriptionComponent } from './cocktail-description/cocktail-description.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

const routes: Routes = [
  { path: '', component: CocktailListComponent }, 
  { path: 'cocktail/:id', component: CocktailDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
