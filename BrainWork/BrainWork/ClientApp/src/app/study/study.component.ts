import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { YourStudySet } from '../flashcard-list/flashcard-list.component';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
  setItem: YourStudySet;
  baseUrl: string;

  constructor(private route: ActivatedRoute, private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.http.get<YourStudySet>(this.baseUrl + 'api/YourStudySets/' + id).subscribe(res => this.setItem = res);
    
  }





  myFlipFunction() {
    var myElement = document.getElementById("thecard");
    myElement.classList.toggle("flipper");
  }

}

