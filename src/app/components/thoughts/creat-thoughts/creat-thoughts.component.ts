import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ServiceThoughtService } from '../service-thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-thoughts',
  templateUrl: './creat-thoughts.component.html',
  styleUrl: './creat-thoughts.component.css',
})
export class CreatThoughtsComponent {
  thoughts: Thought = {
    content: '',
    author: '',
    model: '',
  };
  constructor(private service: ServiceThoughtService, private router: Router) {}
  createThought() {
    this.service.createTh(this.thoughts).subscribe(() => {
      this.router.navigate(['/listThought']);
    });
  }
  cancel() {
    this.router.navigate(['/createThought']);
  }
}
