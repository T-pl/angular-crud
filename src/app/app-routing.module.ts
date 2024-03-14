import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatThoughtsComponent } from './components/thoughts/creat-thoughts/creat-thoughts.component';
import { ThoughtcontentComponent } from './components/thoughts/thoughtcontent/thoughtcontent.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
