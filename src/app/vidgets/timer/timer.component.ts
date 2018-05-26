import { Component, OnInit } from '@angular/core';
import {DefaultSignalService} from '../alarm-clock/signals/default/defaultSignal.service';
import {SpeakService} from '../../services/speak.service';

@Component({
  selector: 'wfm-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [SpeakService, DefaultSignalService]

})
export class TimerComponent implements OnInit {

  constructor(private speakService: SpeakService, private defaultSignalService: DefaultSignalService) { }

  public selectedHour = '00';
  public selectedMinutes = '00';
  public selectedSeconds = '00';
  public timerId;

  hours = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
    '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00'];
  minutes = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
    '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25',
    '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39'
    , '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53',
    '54', '55', '56', '57', '58', '59'];
  seconds = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
    '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25',
    '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39'
    , '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53',
    '54', '55', '56', '57', '58', '59'];

  ngOnInit() {
    this.speakService.speak('Да сэр... Укажите, на сколько завести таймер?');
  }

  submit() {
    const currentHour = parseInt(document.getElementById('hours').innerText, 10) * 3600000; // в миллисекундах
    const currentMinutes = parseInt(document.getElementById('minutes').innerText, 10) * 60000; // в миллисекундах
    const currentSeconds = parseInt(document.getElementById('seconds').innerText, 10) * 1000; // в миллисекундах

    const alarmHour = parseInt(this.selectedHour, 10) * 3600000;
    const alarmMinutes = parseInt(this.selectedMinutes, 10) * 60000;
    const alarmSeconds = parseInt(this.selectedSeconds, 10) * 1000;

    const currentTime = currentHour + currentMinutes + currentSeconds;
    const alarmTime = alarmHour + alarmMinutes + alarmSeconds;

    let timer = alarmTime;
    if (timer > 86400000) { timer = timer - 86400000; }

    const that = this;
    function func() {
      console.log( 'Таймер работает' );
      that.speakService.speak('Вреемя, сээр...');
    }

    this.timerId = setTimeout(func, alarmTime);
    console.log('Current time: ' + currentTime);
    console.log('Alarm time: ' + alarmTime);
    console.log(timer);


  }

  stop() {
    clearTimeout(this.timerId);
    console.log('Таймер выключен');
  }

}
