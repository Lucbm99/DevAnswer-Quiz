import { PerguntasService } from './perguntas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.scss']
})
export class PerguntasComponent implements OnInit {

  opcoes: string[] = ['<p>', '<span>', '<img>', '<meta>'];
  public listaPerguntas: any; 
  
  constructor(
    private _perguntasService: PerguntasService,
  ) { }

  ngOnInit(): void {
    this._perguntasService.getPerguntas().subscribe((response) => {
      // if(response) {}

      this.listaPerguntas = response.data;
    })
  }

}
