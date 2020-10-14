import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {
  angularModalOpen = false;
  firestoreModalOpen = false;
  javascriptModalOpen = false;
  nodeJSModalOpen = false;

  constructor() {}

  ngOnInit(): void {}

  angularModal() {
    this.angularModalOpen = !this.angularModalOpen;
  }

  firestoreModal() {
    this.firestoreModalOpen = !this.firestoreModalOpen;
  }

  javascriptModal() {
    this.javascriptModalOpen = !this.javascriptModalOpen;
  }

  nodeJSModal() {
    this.nodeJSModalOpen = !this.nodeJSModalOpen;
  }
}
