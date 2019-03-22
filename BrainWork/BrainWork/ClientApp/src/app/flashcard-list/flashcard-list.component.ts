import { Component, OnInit } from '@angular/core';
import { Flashcard } from "../models/Flashcard";
import { Set } from "../models/Set";
@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css']
})
export class FlashcardListComponent implements OnInit {

  set: Flashcard[];
  setsList: Set[];

  constructor() {
    this.set = [];
    this.setsList = [];
  }

  ngOnInit() {
  }

  addFlashcard(term,definition) {
    let card = new Flashcard(term,definition);
    this.set.push(card);
   
  }

  removeFlashcard(flashcard) {
    let index = this.set.indexOf(flashcard);
    this.set.splice(index,1);
  }

  createSet(title) {
    
    let flashcardSet = new Set(title, this.set);
    this.setsList.push(flashcardSet);
    console.dir(this.setsList[0]);
  }
  //add to setlist
  
  
}
