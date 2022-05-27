import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ColecaoService } from 'src/app/_module/private/_service/colecao.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-colecao-form',
  templateUrl: './colecao-form.component.html',
  styleUrls: ['./colecao-form.component.scss']
})
export class ColecaoFormComponent implements OnInit {

  public form!: FormGroup;
  public formInvalid!: boolean;

  constructor(private _colecaoService: ColecaoService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _location: Location) { }

  ngOnInit(): void {

    this.form = this._formBuilder.group({
      id: null,
      nome: [null, [Validators.required]],
      responsavel: [null, [Validators.required]],
      estacao: [null, [Validators.required]],
      marca: [null, [Validators.required]],
      ano: [null, [Validators.required]],
      orcamento: [null, [Validators.required, Validators.min(0)]],
    });

    if (this._route.snapshot.paramMap.get('id')) {
      this._route.params.subscribe(
        (params: any) => {
          const id = params['id'];
          const colecao$ = this._colecaoService.loadById(id);
          colecao$.subscribe(colecao => this.updateForm(colecao));
        }
      );
    }

  }

  public updateForm(colecao: any) {
    this.form.patchValue({
      id: colecao.id,
      nome: colecao.nome,
      responsavel: colecao.responsavel,
      estacao: colecao.estacao,
      marca: colecao.marca,
      ano: colecao.ano,
      orcamento: colecao.orcamento,
    })
  }

  public onSubmit() {
    if (!this.form.valid) {
      this.formInvalid = true;
      return;
    }
    if (this.form.value.id) {
      this._colecaoService.update(this.form.value).subscribe();
      alert(`A coleção ${this.form.value.nome} foi alterada com sucesso.`)
      this._location.back();
    } else {
      this._colecaoService.create(this.form.value).subscribe();
      alert(`A coleção ${this.form.value.nome} foi criada com sucesso.`)
      this._location.back();
    }
  }

  public onCancel() {
    this.form.reset();
    this._location.back();
  }

}

