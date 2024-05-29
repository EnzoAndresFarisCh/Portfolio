import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itsMobile: boolean = window.innerWidth < 992;
  openMenuMobile: boolean = false
  v: boolean = false
  constructor() { }
  menu_buttons: any[] = [
    {
      text: 'Inicio',
      selector_scroll: 'start'
    },
    {
      text: 'Experiência',
      selector_scroll: 'experience'
    },
    {
      text: 'Projetos',
      selector_scroll: 'projects'
    },
    {
      text: 'Sobre mim',
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

  eventListenerBody(){
    this.openMenuMobile = !this.openMenuMobile
    const close = () => {
      if(this.openMenuMobile && this.v){
        this.openMenuMobile = false
        this.v = false
        document.body.removeEventListener('click', close)
      }
      else if(!this.v) {
        this.v = true
      }
    }

    document.body.addEventListener('click', close)
  }
}
