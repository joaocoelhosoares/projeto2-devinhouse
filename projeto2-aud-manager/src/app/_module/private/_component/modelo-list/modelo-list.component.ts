import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Modelo } from 'src/app/_module/private/_class/modelo';
import { ModeloService } from 'src/app/_module/private/_service/modelo.service';

@Component({
  selector: 'app-modelo-list',
  templateUrl: './modelo-list.component.html',
  styleUrls: ['./modelo-list.component.scss']
})
export class ModeloListComponent implements OnInit {

  public modelos$!: Observable<Modelo[]>;

  constructor(private _modeloService: ModeloService) { }

  ngOnInit(): void {
    this.modelos$ = this._modeloService.list();
  }

  public editModel(id: number) {
    console.log('Entrou no edit!');
  }

}
