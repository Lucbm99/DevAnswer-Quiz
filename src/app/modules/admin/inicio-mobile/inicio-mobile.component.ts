import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-mobile',
  templateUrl: './inicio-mobile.component.html',
  styleUrls: ['./inicio-mobile.component.scss']
})
export class InicioMobileComponent implements OnInit {

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

  paginaBack() {
    this.router.navigateByUrl('/inicio-back')
  }
}
