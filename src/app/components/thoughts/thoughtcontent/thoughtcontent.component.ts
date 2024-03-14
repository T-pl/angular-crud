import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ServiceThoughtService } from '../service-thought.service';

@Component({
  selector: 'app-thoughtcontent',
  templateUrl: './thoughtcontent.component.html',
  styleUrl: './thoughtcontent.component.css',
})
export class ThoughtcontentComponent {
  listThoughts: Thought[] = [];
  constructor(private service: ServiceThoughtService) {}
  ngOnInit(): void {
    this.service.list().subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    });
  }
}
