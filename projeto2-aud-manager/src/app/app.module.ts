import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './_component/login/login.component';
import { RedefinirSenhaComponent } from './_component/redefinir-senha/redefinir-senha.component';
import { FullComponent } from './_layout/full/full.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RedefinirSenhaComponent,
    FullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
