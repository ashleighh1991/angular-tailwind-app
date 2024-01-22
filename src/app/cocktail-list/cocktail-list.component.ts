import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  cocktails: any;
  
  constructor(private cocktailService: CocktailService) {}

  ngOnInit() {
    this.fetchCocktails('Alcoholic');
  }

  fetchCocktails(alcoholic: string) {
    this.cocktailService.getCocktailsByAlcoholic(alcoholic).subscribe({
      next: (data) => {
        this.cocktails = data
        console.log('Cocktails:', this.cocktails);
      },
      error: (error) => {
        console.error('Error fetching cocktails:', error);
      },
    });
  }
}

