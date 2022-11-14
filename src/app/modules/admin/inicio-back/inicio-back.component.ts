import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-back',
  templateUrl: './inicio-back.component.html',
  styleUrls: ['./inicio-back.component.scss']
})
export class InicioBackComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  paginaUsuario() {
    this.router.navigateByUrl('/usuario')
  }

  paginaFront() {
    this.router.navigateByUrl('/inicio')
  }

  paginaMobile() {
    this.router.navigateByUrl('/inicio-mobile')
  }
}
