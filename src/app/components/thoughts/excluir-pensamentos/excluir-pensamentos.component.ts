import { ActivatedRoute, Router } from '@angular/router';
import { ServiceThoughtService } from '../service-thought.service';
import { Thought } from './../thought';
import { Component } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamentos',
  templateUrl: './excluir-pensamentos.component.html',
  styleUrl: './excluir-pensamentos.component.css',
})
export class ExcluirPensamentosComponent {
  thought: Thought = {
    id: 0,
    content: '',
    author: '',
    model: '',
  };
  constructor(
    private service: ServiceThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    });
  }
  actionDelThought() {
    if (this.thought.id) {
      this.service.deleteTh(this.thought.id).subscribe(() => {
        this.router.navigate(['/listThought']);
      });
    }
  }
  cancelDel() {
    this.router.navigate(['/listThought']);
  }
}
