import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Colecao } from 'src/app/_module/private/_class/colecao';
import { ColecaoService } from 'src/app/_module/private/_service/colecao.service';

@Component({
  selector: 'app-colecao-list',
  templateUrl: './colecao-list.component.html',
  styleUrls: ['./colecao-list.component.scss']
})
export class ColecaoListComponent implements OnInit {

  public colecoes$!: Observable<Colecao[]>;

  constructor(private _colecaoService: ColecaoService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.colecoes$ = this._colecaoService.list();

  }

  /*  
        // NO MOMENTO NÃO É USADO POIS UTILIZO NA LISTA DO HTML [routerLink]="'../colecoes/' + colecao.id"
   editColection(id: number) {
      console.log('entrou editor')
      this._router.navigate(['../colecoes/', id], { relativeTo: this._route })
    } */

  public onDelete(colecao: Colecao) {
    this._colecaoService.delete(colecao.id).subscribe();
  }

}
