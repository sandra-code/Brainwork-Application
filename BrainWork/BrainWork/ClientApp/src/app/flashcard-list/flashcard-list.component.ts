import { Component, OnInit, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css']
})
export class FlashcardListComponent implements OnInit {
  postData: YourStudySet;
  set: Flashcard[];
  baseUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private router: Router, private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.set = [];
    this.baseUrl = baseUrl;
    this.postData = new YourStudySet();
  }

  ngOnInit() {
  }

  addFlashcard(_term,_definition) {
    let card = new Flashcard();
    card.term = _term;
    card.definition = _definition;
    this.set.push(card);
  }

  removeFlashcard(flashcard) {
    let index = this.set.indexOf(flashcard);
    this.set.splice(index,1);
  }

  createSet(titleName) {
    
    this.postData.title = titleName;
    this.postData.flashcardSet = this.set;

    this.http.post(this.baseUrl + 'api/YourStudySets',
     this.postData).subscribe(
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
  id: number;
  term: string;
  definition: string;
}

export class YourStudySet {
  id: number;
  title: string;
  flashcardSet: Flashcard[];
}

