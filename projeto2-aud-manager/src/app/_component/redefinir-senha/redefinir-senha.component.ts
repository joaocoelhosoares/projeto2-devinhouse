import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.scss']
})
export class RedefinirSenhaComponent implements OnInit {
  public form!: FormGroup;
  public formInvalid!: boolean;

  constructor(private _formBuilder: FormBuilder,
    private _router: Router) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    })
  }

  public onSubmit() {
    if (!this.form.valid) {
      this.formInvalid = true;
      return
    }
    this.formInvalid = false;
    this._router.navigate(['/login']);
  }

}
