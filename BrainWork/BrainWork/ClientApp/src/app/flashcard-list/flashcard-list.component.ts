import { Component, OnInit } from '@angular/core';
import { Flashcard } from "../models/Flashcard";
@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css']
})
export class FlashcardListComponent implements OnInit {

  set: Flashcard[];

  constructor() {
    this.set = [];
  }

  ngOnInit() {
  }

  addFlashcard(term, definition) {
    let flashcard = new Flashcard(term, definition);
    this.set.push(flashcard);
   
  }

  removeFlashcard(flashcard) {
    let index = this.set.indexOf(flashcard);
    this.set.splice(index,1);
  }

  //createSet(title){}

  //title+array
  //add to setlist
  
  
}
