import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {


  constructor() { }
  ngOnInit() {
  }

  myFlipFunction() {
    var myElement = document.getElementById("thecard");
    myElement.classList.toggle("flipper");
  }

}

