import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-phrase-button',
  templateUrl: './phrase-button.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class PhraseButtonComponent implements OnInit {
  @Input() generatedPhrase: string | undefined;
  @Output() phraseConcat: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  chooseStart() {
    const start: Array<string> = [
      'I enjoy',
      'I like'
    ];
    return start[Math.floor(Math.random() * start.length)];
  }
  chooseEnd() {
    const end: Array<string> = [
      'in the afternoon',
      'on a weekend'
    ];
    return end[Math.floor(Math.random() * end.length)];
  }

  onClick() {
    const newStart = this.chooseStart();
    const newEnd = this.chooseEnd();
    this.generatedPhrase = `${newStart} ${this.generatedPhrase} ${newEnd}`;
    this.phraseConcat.emit(this.generatedPhrase);
  }

  checkRender2() {
    console.log('check render2');
    return true;
  }
}
