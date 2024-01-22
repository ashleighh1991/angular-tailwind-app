import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  isDarkModeSubject = new BehaviorSubject<boolean>(this.loadDarkModePreference());
  isDarkMode$ = this.isDarkModeSubject.asObservable();

  toggleDarkMode() {
    console.log('Toggling dark mode');
    const newMode = !this.isDarkModeSubject.value;
    console.log('New mode:', newMode);
    this.isDarkModeSubject.next(newMode);
    this.saveDarkModePreference(newMode);
  }

  loadDarkModePreference(): boolean {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  }

  private saveDarkModePreference(isDarkMode: boolean): void {
    localStorage.setItem('darkMode', isDarkMode.toString());
  }
}
