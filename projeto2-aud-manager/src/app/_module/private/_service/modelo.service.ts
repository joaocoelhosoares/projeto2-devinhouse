import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Modelo } from '../_class/modelo';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  private readonly ApiPath = `${environment.ApiPath}modelo`;

  constructor(private _httpClient: HttpClient) { }

  public create(modelo: Modelo) {
    return this._httpClient.post(this.ApiPath, modelo).pipe(take(1));
  }

  public list(): Observable<Modelo[]> {
    return this._httpClient.get<Modelo[]>(this.ApiPath);
  }

  public update(modelo: Modelo) {
    return this._httpClient.put(`${this.ApiPath}/${modelo.id}`, modelo).pipe(take(1));
  }

  public delete(id: number) {
    return this._httpClient.delete(`${this.ApiPath}/${id}`).pipe(take(1));
  }

  public loadById(id: number) {
    return this._httpClient.get<Modelo>(`${this.ApiPath}/${id}`).pipe(take(1));
  }

}
