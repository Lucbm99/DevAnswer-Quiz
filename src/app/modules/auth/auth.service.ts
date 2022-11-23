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

  public fazerLogin() {

  }

  public fazerCadastro() {

  }

  public esqueciSenha() {
    
  }
}
