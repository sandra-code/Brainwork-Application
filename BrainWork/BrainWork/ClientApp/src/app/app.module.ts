import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SetComponent } from './set/set.component';
import { StudyComponent } from './study/study.component';
import { SetsListComponent } from './sets-list/sets-list.component';
import { FlashcardListComponent } from './flashcard-list/flashcard-list.component';
import { FlipModule } from 'ngx-flip';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SetComponent,
    StudyComponent,
    SetsListComponent,
    FlashcardListComponent,
    GroupsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlipModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'set', component: SetComponent },
      { path: 'study/:id', component: StudyComponent },
      { path: 'sets-list', component: SetsListComponent },
      { path: 'flashcard-list', component: FlashcardListComponent },
      { path: 'groups', component: GroupsComponent },
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
