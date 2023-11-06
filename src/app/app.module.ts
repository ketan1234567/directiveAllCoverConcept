import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgPluralComponent } from './ng-plural/ng-plural.component';
import { cpColorDirective } from './attribute-directives/cp-color.directive';
import { CPCustomThemeDirective } from './attribute-directives/cp-custom-theme.directive';
import { CPDefaultThemeDirective } from './attribute-directives/cp-default-theme.directive';
import { DefaultColorOnEventDirective } from './attribute-directives/default-color-on-event.directive.';
import { DynamicColorOnEventDirective } from './attribute-directives/dynamic-color-on-event.directive';
import { CpIfDirective } from './structure-directives/cp-if.directive';
import { cpLoopDecorator } from './structure-directives/cp-loop.directive';
import { cpDelayDirective } from './structure-directives/cp-delay.directive';


@NgModule({
  declarations: [
    AppComponent,
    NgPluralComponent,
    CPDefaultThemeDirective,
    cpColorDirective,
    CPCustomThemeDirective,
    DefaultColorOnEventDirective,
    DynamicColorOnEventDirective,
    CpIfDirective,
    cpLoopDecorator,
    cpDelayDirective
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
