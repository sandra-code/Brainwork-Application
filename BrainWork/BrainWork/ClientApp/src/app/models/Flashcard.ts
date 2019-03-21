export class Flashcard {
  term: string;
  definition: string;
  flashcard: string;

  constructor(term, definition) {
    this.term = term;
    this.definition = definition;
    this.flashcard = this.term + ' ' + this.definition;
  }
}
