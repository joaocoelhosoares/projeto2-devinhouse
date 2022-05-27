import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Colecao } from 'src/app/_module/private/_class/colecao';
import { Modelo } from 'src/app/_module/private/_class/modelo';
import { ColecaoService } from 'src/app/_module/private/_service/colecao.service';
import { ModeloService } from 'src/app/_module/private/_service/modelo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public colecoes$!: Observable<Colecao[]>;
  public modelos$!: Observable<Modelo[]>;
  public colecoesList!: Colecao[];
  public colecoesMean: number = 0;

  constructor(private _colecaoService: ColecaoService,
    private _modeloService: ModeloService) { }

  ngOnInit(): void {
    this.colecoes$ = this._colecaoService.list();
    this.modelos$ = this._modeloService.list();

    this._colecaoService.list().subscribe(arr => {
      arr.forEach(col => this.colecoesMean = this.colecoesMean + col.orcamento)
      this.colecoesMean = this.colecoesMean / arr.length;
    });

    this._colecaoService.list().subscribe(arr => this.colecoesList = arr.sort((a, b) => b.orcamento - a.orcamento).slice(0, 5));

  }

}
