import { Flashcard } from "../models/Flashcard";
export class Set {
  title: string;
  set: Flashcard[];


  constructor(title, set) {
    this.title = title;
    this.set = set;
  }
}
