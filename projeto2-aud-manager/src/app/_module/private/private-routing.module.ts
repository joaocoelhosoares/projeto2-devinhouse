import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColecaoFormComponent } from './_component/colecao-form/colecao-form.component';
import { ColecaoListComponent } from './_component/colecao-list/colecao-list.component';
import { DashboardComponent } from './_component/dashboard/dashboard.component';
import { ModeloFormComponent } from './_component/modelo-form/modelo-form.component';
import { ModeloListComponent } from './_component/modelo-list/modelo-list.component';
import { ContentComponent } from './_layout/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'colecoes', component: ColecaoFormComponent },
      { path: 'colecoes/:id', component: ColecaoFormComponent },
      { path: 'listacolecoes', component: ColecaoListComponent },
      { path: 'modelos', component: ModeloFormComponent },
      { path: 'modelos/:id', component: ModeloFormComponent },
      { path: 'listamodelos', component: ModeloListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
