import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private _router: Router,
    private _loginService: LoginService) { }

  ngOnInit(): void {
  }

  public onLogout() {
    this._loginService.isLoggedIn = !this._loginService.isLoggedIn;
    this._router.navigate(['/login']);
  }

}
