import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDescriptionComponent } from './cocktail-description/cocktail-description.component';
import { DarkModeService } from './dark-mode.service';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponent,
    CocktailDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DarkModeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
