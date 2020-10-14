import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
makeInactive: any;
battleshipModalOpen = false;
calculatorModalOpen = false;
jokesModalOpen = false;
mazeModalOpen = false;
snakeModalOpen = false;
plainWeatherModalOpen = false;
messageModalOpen = false;
movieModalOpen = false;
stopwatchModalOpen = false;
notesModalOpen = false;
chatModalOpen = false;
ecomModalOpen = false;
nodeJSWeatherModalOpen = false;
passwordModalOpen = false;
mathModalOpen = false;
covidModalOpen = false;
emailModalOpen = false;
wikiModalOpen = false;


  constructor() { }

  ngOnInit(): void {
    this.makeInactive = document.querySelector('.active');
  }


  onClick(target: any) {
    this.makeInactive = document.querySelector('.active');
    this.makeInactive.classList.remove('active');
    this.makeInactive = target;
    this.makeInactive.classList.add('active');
  }

  battleshipModal() {
    this.battleshipModalOpen = !this.battleshipModalOpen;
  }

  calculatorModal() {
    this.calculatorModalOpen = !this.calculatorModalOpen;
  }

  jokesModal() {
    this.jokesModalOpen = !this.jokesModalOpen;
  }

  mazeModal() {
    this.mazeModalOpen = !this.mazeModalOpen;
  }

  snakeModal() {
    this.snakeModalOpen = !this.snakeModalOpen;
  }

  plainWeatherModal() {
    this.plainWeatherModalOpen = !this.plainWeatherModalOpen;
  }

  messageModal() {
    this.messageModalOpen = !this.messageModalOpen;
  }

  movieModal() {
    this.movieModalOpen = !this.movieModalOpen;
  }

  stopwatchModal() {
    this.stopwatchModalOpen = !this.stopwatchModalOpen;
  }

  notesModal() {
    this.notesModalOpen = !this.notesModalOpen;
  }

  chatModal() {
    this.chatModalOpen = !this.chatModalOpen;
  }

  ecomModal() {
    this.ecomModalOpen = !this.ecomModalOpen;
  }

  nodeJSWeatherModal() {
    this.nodeJSWeatherModalOpen = !this.nodeJSWeatherModalOpen;
  }

  passwordModal() {
    this.passwordModalOpen = !this.passwordModalOpen;
  }

  mathModal() {
    this.mathModalOpen = !this.mathModalOpen;
  }

  covidModal() {
    this.covidModalOpen = !this.covidModalOpen;
  }

  emailModal() {
    this.emailModalOpen = !this.emailModalOpen;
  }

  wikiModal() {
    this.wikiModalOpen = !this.wikiModalOpen;
  }
}
