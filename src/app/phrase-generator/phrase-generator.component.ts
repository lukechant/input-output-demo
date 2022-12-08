import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-phrase-generator',
  templateUrl: './phrase-generator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhraseGeneratorComponent implements OnInit {

  generatedPhrase: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.generatedPhrase = this.phraseGenerator();
  }

  phraseGenerator(): string {
    return `Some words`;
  }

  phraseToDisplay(phrase: string) {
    this.generatedPhrase = phrase;
  }
}
