import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Colecao } from 'src/app/_module/private/_class/colecao';
import { ColecaoService } from 'src/app/_module/private/_service/colecao.service';
import { ModeloService } from 'src/app/_module/private/_service/modelo.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-modelo-form',
  templateUrl: './modelo-form.component.html',
  styleUrls: ['./modelo-form.component.scss']
})
export class ModeloFormComponent implements OnInit {

  public form!: FormGroup;

  public colecoes$!: Observable<Colecao[]>;

  public formInvalid!: boolean;
  selected = 'selectCountry';


  constructor(private _modeloService: ModeloService,
    private _colecaoService: ColecaoService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _location: Location) { }

  ngOnInit(): void {

    this.colecoes$ = this._colecaoService.list();

    this.form = this._formBuilder.group({
      id: null,
      nome: [null, [Validators.required]],
      responsavel: [null, [Validators.required]],
      tipoModelo: [null, [Validators.required]],
      colecao: [null, [Validators.required]],
      bordado: [null, [Validators.required]],
      estampa: [null, [Validators.required]],
    });

    if (this._route.snapshot.paramMap.get('id')) {
      this._route.params.subscribe(
        (params: any) => {
          const id = params['id'];
          const modelo$ = this._modeloService.loadById(id);
          modelo$.subscribe(modelo => this.updateForm(modelo));
        }
      );
    }

  }

  public updateForm(modelo: any) {
    this.form.patchValue({
      id: modelo.id,
      nome: modelo.nome,
      responsavel: modelo.responsavel,
      tipoModelo: modelo.tipoModelo,
      colecao: modelo.colecao,
      bordado: modelo.bordado,
      estampa: modelo.estampa
    })
  }

  public onSubmit() {
    if (!this.form.valid) {
      this.formInvalid = true;
      return;
    }
    if (this.form.value.id) {
      this._modeloService.update(this.form.value).subscribe();
      alert(`O modelo ${this.form.value.nome} foi alterado com sucesso.`)
      this._location.back();
    } else {
      this._modeloService.create(this.form.value).subscribe();
      alert(`O modelo ${this.form.value.nome} foi criado com sucesso.`)
      this._location.back();
    }
  }

  public onCancel() {
    this.form.reset();
    this._location.back();
  }

  public onDelete() {
    this._modeloService.delete(this.form.value.id).subscribe();
    alert(`O modelo ${this.form.value.nome} foi excluído com sucesso.`);
    this._location.back();
  }

}
