import { Component } from '@angular/core';

@Component({
  selector: 'app-thoughtcontent',
  templateUrl: './thoughtcontent.component.html',
  styleUrl: './thoughtcontent.component.css',
})
export class ThoughtcontentComponent {
  listThoughts = [
    { content: 'qualquer', author: 'Tiago', model: 'modelo3' },
    { content: 'GEOMGOEMG', author: 'Outro', model: 'modelo1' },
    { content: 'Diferente', author: 'Tnto faz', model: 'modelo2' },
  ];
}
