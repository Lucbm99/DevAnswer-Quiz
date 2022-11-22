import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = 'http://localhost:4000/';

  constructor(
    private _httpClient: HttpClient
  ) { }

  public getUsuarios(): Observable<any> {
    return this._httpClient.get<any>(`${this.baseURL}usuarios`)
    .pipe(
      tap((response: any) => 
        response
    ),  
    catchError((error: HttpErrorResponse) => {
      console.log('error', error)
      return EMPTY;
    }),
  )}

  public fazerLogin() {

  }

  public fazerCadastro() {

  }

  public esqueciSenha() {
    
  }
}
