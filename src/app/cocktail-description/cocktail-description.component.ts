import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-description',
  templateUrl: './cocktail-description.component.html',
  styleUrls: ['./cocktail-description.component.css']
})
export class CocktailDescriptionComponent implements OnInit {
  cocktailId: string = '';
  cocktailDetails: any;
  selectedLanguage: string = 'Default'

  constructor(private route: ActivatedRoute, private cocktailService: CocktailService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.cocktailId = params.get('id') ?? '';
      this.fetchCocktailDetails();
    });
  }

  fetchCocktailDetails() {
    this.cocktailService.getCocktailById(this.cocktailId).subscribe({
      next: (data) => {
        console.log('API Response:', data);
        this.cocktailDetails = data?.drinks?.[0] || null;
      },
      error: (error) => {
        console.error('Error fetching cocktail details:', error);
      },
    });
  }

  getAvailableLanguages(): string[] {
    const languages = [];
    for (const key in this.cocktailDetails) {
      if (key.startsWith('strInstructions') && this.cocktailDetails[key] !== null) {
        const language = key.replace('strInstructions', '');
        languages.push(language);
      }
    }
    return languages;
  }

  setLanguage(language: string) {
    this.selectedLanguage = language;
  }

  getInstructions(): string | null {
    const defaultInstructions = this.cocktailDetails.strInstructions || null;
    const instructionKey = `strInstructions${this.selectedLanguage}`;
    return this.cocktailDetails[instructionKey] || defaultInstructions || null;
  }

}