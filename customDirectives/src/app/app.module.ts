import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './CustomDirective/setBackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { BetterHighlightDirective } from './CustomDirective/better-highlight.directive';
import { ClassDirective } from './CustomDirective/class.directive';

@NgModule({
  declarations: [
    AppComponent, SetBackgroundDirective, HighlightDirective, HoverDirective, BetterHighlightDirective, ClassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
