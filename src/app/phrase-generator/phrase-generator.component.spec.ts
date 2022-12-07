import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseGeneratorComponent } from './phrase-generator.component';

describe('PhraseGeneratorComponent', () => {
  let component: PhraseGeneratorComponent;
  let fixture: ComponentFixture<PhraseGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhraseGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
