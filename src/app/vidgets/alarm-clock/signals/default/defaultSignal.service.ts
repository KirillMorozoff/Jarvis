import {Injectable} from '@angular/core';
import {TimeService} from '../../../../services/time.service';
import {WeatherService} from '../../../../services/weather.service';

@Injectable()

export class DefaultSignalService {
  constructor(private timeService: TimeService, private weatherService: WeatherService) { }

  replic: string;
  speach() {
    const currentHour = parseInt(document.getElementById('hours').innerText, 10);
    if (currentHour > 5 && currentHour < 11) {
      this.replic = 'Доброе утро';
    } else if (currentHour > 11 && currentHour < 17) {
      this.replic = 'Добрый день';
    } else {
      this.replic = 'Добрый вечер';
    }
    this.weatherService.returnWeather(this.replic + '. ' + this.timeService.getTime());
  }
}
