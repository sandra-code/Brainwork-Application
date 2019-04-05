import { Component, OnInit, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css']
})
export class FlashcardListComponent implements OnInit {

  set: Flashcard[];
  setsList: Set[];
  baseUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private router: Router, private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.set = [];
    this.setsList = [];
    this.baseUrl = baseUrl;
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

    this.http.post(this.baseUrl + 'api/YourStudySets',
      {
        "title": title,
        "flashcardSet": flashcardSet
      }).subscribe(
        (val) => {
          console.log("post call successful", val);
        },
        response => {
          console.log("post call error", response);
        },
        () => {
          console.log("post is completed");
          this.router.navigateByUrl('/sets-list');

        }
      );
  }
}

export class Flashcard {
  term: string;
  definition: string;

  constructor(_term, _def) {
    this.term = _term;
    this.definition = _def;
  }
}

export class Set {
  title: string;
  set=[];

  constructor(title, set) {
    this.title = title;
    this.set = set;
  }
}