import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_component/login/login.component';
import { RedefinirSenhaComponent } from './_component/redefinir-senha/redefinir-senha.component';
import { FullComponent } from './_layout/full/full.component';
import { AuthGuard } from './_service/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'redefinirsenha', component: RedefinirSenhaComponent },
    ]
  },
  {
    path: 'privado',
    //canActivate: [AuthGuard],
    //canLoad: [AuthGuard],
    loadChildren: () => import('./_module/private/private.module').then(m => m.PrivateModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
