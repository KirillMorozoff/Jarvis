import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './vidgets/clock/clock.component';
import { AlarmClockComponent } from './vidgets/alarm-clock/alarm-clock.component';
import {FormsModule} from '@angular/forms';
import { TimerComponent } from './vidgets/timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    AlarmClockComponent,
    TimerComponent,

  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
