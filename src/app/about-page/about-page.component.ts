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
  cProgrammingModalOpen = false;
  cppProgrammingModalOpen = false;
  pythonProgrammingModalOpen = false;
  algorithmsModalOpen = false;
  deepLearningModalOpen = false;
  machineLearningModalOpen = false;

  constructor() {}

  ngOnInit(): void {}

  angularModal() {
    this.angularModalOpen = !this.angularModalOpen;
  }

  algorithmsModal() {
    this.algorithmsModalOpen = !this.algorithmsModalOpen;
  }

  machineLearningModal() {
    this.machineLearningModalOpen = !this.machineLearningModalOpen;
  }

  deepLearningModal() {
    this.deepLearningModalOpen = !this.deepLearningModalOpen;
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

  cProgrammingModal() {
    this.cProgrammingModalOpen = !this.cProgrammingModalOpen;
  }

  cppProgrammingModal() {
    this.cppProgrammingModalOpen = !this.cppProgrammingModalOpen;
  }

  pythonProgrammingModal() {
    this.pythonProgrammingModalOpen = !this.pythonProgrammingModalOpen;
  }
}
