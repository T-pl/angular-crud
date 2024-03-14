import { Component } from '@angular/core';

@Component({
  selector: 'app-creat-thoughts',
  templateUrl: './creat-thoughts.component.html',
  styleUrl: './creat-thoughts.component.css',
})
export class CreatThoughtsComponent {
  thoughts = {
    id: '1',
    content: 'fhufuausfausfa',
    author: 'Tiago',
    model: 'modelo1',
  };
  constructor() {}
  createThought() {
    alert('fdsainfianifnasifndiasndanfs');
  }
}
