import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  menu_buttons: any[] = [
    {
      text: 'Inicio',
      selector_scroll: 'start'
    },
    {
      text: 'Projetos',
      selector_scroll: 'projects'
    },
    {
      text: 'Sobre eu',
      selector_scroll: 'its-me'
    },
    {
      text: 'Skills',
      selector_scroll: 'skills'
    },
  ]
  ngOnInit() {
  }


  scrollSeletor(s: string){
    document.querySelector(`section.${s}`)?.scrollIntoView()
  }
}
