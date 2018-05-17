import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wfm-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');

    const month = document.querySelector('.month');
    const day = document.querySelector('.day');
    const year = document.querySelector('.year');

    function setDate() {
      const now = new Date();
      const mm = now.getMonth().toString();
      const dd = now.getDate().toString();
      const yyyy = now.getFullYear().toString();
      const secs = now.getSeconds().toString();
      const mins = now.getMinutes().toString();
      const hrs = now.getHours().toString();
      const monthName = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
      ];

      if (Number.parseInt(hrs) > 24) {
        hours.innerHTML = (Number.parseInt(hrs) - 12).toString();
      } else {
        hours.innerHTML = hrs;
      }

      if (Number.parseInt(secs) < 10) {
        seconds.innerHTML = '0' + secs;
      } else {
        seconds.innerHTML = secs;
      }

      if (Number.parseInt(mins) < 10) {
        minutes.innerHTML = '0' + mins;
      } else {
        minutes.innerHTML = mins;
      }

      month.innerHTML = monthName[mm];
      day.innerHTML = dd;
      year.innerHTML = yyyy;
    }
    setInterval(setDate, 1000);
  }

}
