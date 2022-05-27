import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLoggedIn = false;

  constructor() { }
}
