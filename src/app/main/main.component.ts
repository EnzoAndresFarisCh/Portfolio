import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private nativeELement: ElementRef) { }
  backApresentation: boolean = true
  frontEndApresentation: boolean = true
  fullStackApresentation: boolean = true
  experiences: any[] = [
    {
      title: 'Analista Desenvolvedor',
      empresa: 'Prodemge',
      years: '2022 - Atual',
      content: `Sou Analista Desenvolvedor especializado em Angular, responsável pela concepção e implementação
      de aplicativos modernos e inovadores. Utilizo as últimas
     tecnologias para criar soluções ágeis e escaláveis que impulsionam o sucesso dos projetos em que trabalho.`
    },
    {
      title: 'Estagio em Desenvolvimento',
      empresa: 'Prodemge',
      years: '2022 - 2022 ( 4 meses )',
      content: `Como estagiário, atuei como desenvolvedor, colaborando na concepção e implementação de projetos desafiadores.
       Durante esse período, aprendi e desenvolvi minhas habilidades, criando soluções inovadoras e eficientes.`
    },
    {
      title: 'Assistente de Testes',
      empresa: 'Empresta Bem Melhor',
      years: '2021 – 2022',
      content: `Atuei como Assistente de Testes, sendo responsável por realizar testes nos desenvolvimentos dos projetos e realizar correções, quando necessário. Meu trabalho consistia em garantir a
      qualidade e a funcionalidade dos aplicativos desenvolvidos, colaborando diretamente com a equipe de desenvolvimento para identificar e corrigir quaisquer problemas.`
    }
  ]
  skills: string[] = [
    "HTML5",
    "JavaScript",
    "TypeScript",
    "CSS3",
    "Bootstrap",
    "Angular",
    "Angular Material",
    "Puppeteer",
    "RxJs",
    "SQL",
    "VueJS",
    "Vuetify – VueJS",
    "PHP",
    "Laravel – PHP",
    "C",
    "GIT"
  ]

  ngOnInit() {
  }

  openWindow(_s: string): void{
    window.open(_s)
  }

  selectedOrganizer(event: Event): void{
    this.nativeELement.nativeElement.querySelector('.organizer-buttons button.selected').classList.remove('selected')
    ;(<HTMLElement>event.target).classList.add('selected')
  }

  showBack(): void{
    this.backApresentation = true
    this.frontEndApresentation = false
    this.fullStackApresentation = false
  }

  showFront(): void{
    this.backApresentation = false
    this.frontEndApresentation = true
    this.fullStackApresentation = false
  }

  showFullStack(): void{
    this.backApresentation = false
    this.frontEndApresentation = false
    this.fullStackApresentation = true
  }

  showAll(): void{
    this.backApresentation = true
    this.frontEndApresentation = true
    this.fullStackApresentation = true
  }

  getAnos(s: string): number{
    const dataDeInicio: any = new Date(s);
    const dataAtual: any = new Date();
    const diffInMilliseconds = dataAtual - dataDeInicio;
    const milisegundosDataAno = 1000 * 60 * 60 * 24 * 365.25;
    const divAnos = diffInMilliseconds / milisegundosDataAno;
    const result: number = Math.floor(divAnos);
    return result
  }
}
