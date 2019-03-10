import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LevelManagementComponent } from './level-management/level-management.component';
import { PointCalculatorComponent } from './point-calculator/point-calculator.component';
import { QuizerComponent } from './quizer/quizer.component';
import { QuizerAnswerComponent } from './quizer-answer/quizer-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelManagementComponent,
    PointCalculatorComponent,
    QuizerComponent,
    QuizerAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
