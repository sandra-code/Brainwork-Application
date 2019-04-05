import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Set } from '../flashcard-list/flashcard-list.component';


@Component({
  selector: 'app-sets-list',
  templateUrl: './sets-list.component.html',
  styleUrls: ['./sets-list.component.css']
})
export class SetsListComponent implements OnInit {
  displayedColumns: string[] = ['title'];
  dataSource: MatTableDataSource<YourStudySet>;
  @ViewChild(MatSort) sort: MatSort;
  baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  ngOnInit() {
    this.http.get<YourStudySet[]>(this.baseUrl + 'api/YourStudySets').subscribe(result => {
      this.dataSource = new MatTableDataSource<YourStudySet>(result);
      this.dataSource.sort = this.sort;
    }, error => console.error(error));

  }
  
}

interface YourStudySet {
  id: number;
  title: string;
  flashcards: Set[];
}

