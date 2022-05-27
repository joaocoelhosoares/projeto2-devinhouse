import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Colecao } from '../_class/colecao';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  private readonly ApiPath = `${environment.ApiPath}colecao`;

  constructor(private _httpClient: HttpClient) { }

  public create(colecao: Colecao) {
    return this._httpClient.post(this.ApiPath, colecao).pipe(take(1));
  }

  public list(): Observable<Colecao[]> {
    return this._httpClient.get<Colecao[]>(this.ApiPath);
  }

  public update(colecao: Colecao) {
    return this._httpClient.put(`${this.ApiPath}/${colecao.id}`, colecao).pipe(take(1));
  }

  public delete(id: number) {
    return this._httpClient.delete(`${this.ApiPath}/${id}`).pipe(take(1));
  }

  public loadById(id: number) {
    return this._httpClient.get<Colecao>(`${this.ApiPath}/${id}`).pipe(take(1));
  }

}
