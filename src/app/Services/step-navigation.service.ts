// step-navigation.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // makes it available globally
})
export class StepNavigationService {
  public stepToGo: number | null = null;
}
