import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './_component/dashboard/dashboard.component';
import { ContentComponent } from './_layout/content/content.component';
import { ColecaoFormComponent } from './_component/colecao-form/colecao-form.component';
import { ColecaoListComponent } from './_component/colecao-list/colecao-list.component';
import { ModeloFormComponent } from './_component/modelo-form/modelo-form.component';
import { ModeloListComponent } from './_component/modelo-list/modelo-list.component';
import { MenuComponent } from './_component/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    ContentComponent,
    ColecaoFormComponent,
    ColecaoListComponent,
    ModeloFormComponent,
    ModeloListComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrivateModule { }
