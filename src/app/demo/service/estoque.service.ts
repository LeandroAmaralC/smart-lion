import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Estoque } from "../model/Estoque";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class EstoqueService {
  constructor(private http: HttpClient) {}
  requestMapping: String = "/api/estoque/";

  buscarTodosItensEstoque(
    descricao: string,
    pageable: any
  ): Observable<Array<Estoque>> {

    const params = new HttpParams()
    .set('descricao', descricao)
    .set('page', '0')
    .set('size', '10')
    .set('sort', 'id,desc')

    return this.http
      .get<Array<Estoque>>(
        `${environment.apiBaseUrl}${this.requestMapping}buscar-todos-itens-estoque`, { params: params }
      )
      .pipe(
        (response: any) => response,
        (error: any) => error
      );
  }
}
