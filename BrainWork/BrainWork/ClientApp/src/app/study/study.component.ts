import { Component, OnInit } from '@angular/core';
import {Flashcard } from "../models/Flashcard";

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
  //set: Flashcard[];


  constructor() { }
  ngOnInit() {
    //this.set = [
    //  {
    //    term: 'der Apfel',
    //    definition: 'õun'
    //  },
    //  {
    //    term: 'die Traube',
    //    definition: 'viinamari'
    //  }]
  }


}
