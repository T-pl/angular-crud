import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatThoughtsComponent } from './components/thoughts/creat-thoughts/creat-thoughts.component';
import { ThoughtcontentComponent } from './components/thoughts/thoughtcontent/thoughtcontent.component';
import { ExcluirPensamentosComponent } from './components/thoughts/excluir-pensamentos/excluir-pensamentos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'createThought',
    pathMatch: 'full',
  },
  {
    path: 'createThought',
    component: CreatThoughtsComponent,
  },
  {
    path: 'listThought',
    component: ThoughtcontentComponent,
  },
  {
    path: 'thoughts/excluirPensamentos/:id',
    component: ExcluirPensamentosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
