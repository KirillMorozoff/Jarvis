import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { TimeService } from './services/time.service';
import { OnInit } from '@angular/core';
import {SpeakService} from './services/speak.service';

@Component({
  selector: 'wfm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService, TimeService, SpeakService]
})
export class AppComponent implements OnInit {
  title = 'wfm';
  command = '';
  textarea: any;
  voices: any;
  synth: any;

  constructor(private weatherService: WeatherService, private timeService: TimeService, private speakService: SpeakService) {}

  ngOnInit() {
    this.synth = window.speechSynthesis;

  }
  submit() {
      this.command = document.getElementsByTagName('input')[0].value.toLowerCase();
      this.textarea = document.getElementById('textarea');
      if (this.command === 'будильник') {
          this.execute();
          this.command = '';
      } else if (this.command === 'погода') {
          this.execute();
          event.preventDefault();

          this.weatherService.returnWeather('');
      } else if (this.command === 'время') {
          this.speakService.speak(this.timeService.getTime());
          this.execute();
      } else if (this.command === 'таймер') {
        this.execute();
      } else {
        this.execute();
    }


  }
  execute() {
      this.textarea.value += this.timeService.getTime()
                                 .substring(this.timeService.getTime().length - 5, this.timeService.getTime()
                                 .length) + '..............................' + this.command + '\n';

      console.log(this.command);
      this.command = '';
  }



}
