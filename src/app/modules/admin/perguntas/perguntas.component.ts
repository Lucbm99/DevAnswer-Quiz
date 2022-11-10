import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.scss']
})
export class PerguntasComponent implements OnInit {

  constructor() { }
  opcoes: string[] = ['<p>', '<span>', '<img>', '<meta>'];

  ngOnInit(): void {
  }

}
