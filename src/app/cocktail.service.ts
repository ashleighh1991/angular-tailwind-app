import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getCocktailsByAlcoholic(alcoholic: string): Observable<any> {
    const url = `${this.apiUrl}/filter.php?a=${alcoholic}`;
    return this.http.get(url);
  }

  getCocktailById(cocktailId: string): Observable<any> {
    const url = `${this.apiUrl}/lookup.php?i=${cocktailId}`;
    return this.http.get(url);
  }
}
