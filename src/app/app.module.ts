import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhraseGeneratorComponent } from './phrase-generator/phrase-generator.component';
import { PhraseButtonComponent } from './phrase-button/phrase-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PhraseGeneratorComponent,
    PhraseButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
