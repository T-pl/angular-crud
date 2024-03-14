import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.css',
})
export class ThoughtComponent {
  @Input() thought = {
    content: '',
    author: '',
    model: '',
  };
}
