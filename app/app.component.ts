import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <div>
      <h5 *ngFor="let currentRecipe of recipes"><span class="roman">Name: </span>{{currentRecipe.title}} - <button (click)="editRecipe(currentRecipe)">Edit</button></h5>
    </div>
    <hr>
    <div *ngIf="selectedRecipe">
      <h4>Name: {{selectedRecipe.title}}</h4>
      <p>Ingredients: {{selectedRecipe.ingredients}}</p>
      <p>Directions: {{selectedRecipe.directions}}</p>
      <hr>
      <h4>Edit recipe</h4>
      <div class="form-group">
        <label>Edit recipe name:</label>
        <input [(ngModel)]="selectedRecipe.title" [ngModelOptions]="{standalone: true}" class="form-control">
      </div>
      <div class="form-group">
        <label>Edit ingredients:</label>
        <input [(ngModel)]="selectedRecipe.ingredients" [ngModelOptions]="{standalone: true}" class="form-control">
      </div>
      <div class="form-group">
        <label>Edit directions:</label>
        <input [(ngModel)]="selectedRecipe.directions" [ngModelOptions]="{standalone: true}" class="form-control">
      </div>
      <button (click)="finishedEditing()" class="btn">Done editing</button>
    </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Martini', 'gin, dry vermouth', 'Combine ingredients over ice, stir, strain into cocktail glass'),
    new Recipe('Rob Roy', 'scotch, sweet vermouth, dash bitters', 'Combine ingredients over ice, stir, strain into cocktail glass')
  ];

  finishedEditing() {
    this.selectedRecipe = null;
  }

  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }
}



export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) {}
}
