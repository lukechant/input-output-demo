import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-phrase-button',
  templateUrl: './phrase-button.component.html',
  styleUrls: ['./phrase-button.component.css']
})
export class PhraseButtonComponent implements OnInit {
  @Input() generatedPhrase: string | undefined;
  @Output() phraseConcat: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.generatedPhrase = `I think ${this.generatedPhrase} is a good idea!`;
    this.phraseConcat.emit(this.generatedPhrase);
  }

}
