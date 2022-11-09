import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  dadosAlterados() {
    this.router.navigateByUrl("/inicio");
  }

  fazerLogout() {
    this.router.navigateByUrl("/");
  }
}
