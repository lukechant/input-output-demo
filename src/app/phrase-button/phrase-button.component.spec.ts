import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseButtonComponent } from './phrase-button.component';

describe('PhraseButtonComponent', () => {
  let component: PhraseButtonComponent;
  let fixture: ComponentFixture<PhraseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhraseButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
