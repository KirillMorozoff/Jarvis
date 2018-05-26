function getWeather(description: string) {
  let weather = '';
  switch (description.toLowerCase()) {
    case 'thunderstorm with light rain':
      weather = 'гроза с легким дождем.';
      break;
    case 'thunderstorm with rain':
      weather = 'гроза с дождем.';
      break;
    case 'thunderstorm with heavy rain':
      weather = 'гроза и сильный дождь.';
      break;
    case 'light thunderstorm':
      weather = 'легкая гроза.';
      break;
    case 'thunderstorm':
      weather = 'гроза.';
      break;
    case 'heavy thunderstorm':
      weather = 'сильная гроза.';
      break;
    case 'ragged thunderstorm':
      weather = 'Переменные грозы.';
      break;
    case 'thunderstorm with light drizzle':
      weather = 'гроза с легким дождем.';
      break;
    case 'thunderstorm with drizzle':
      weather = 'гроза с моросью.';
      break;
    case 'thunderstorm with heavy drizzle':
      weather = 'гроза с сильной моросью.';
      break;
    case 'light intensity drizzle':
      weather = 'небольшая морось.';
      break;
    case 'drizzle':
      weather = 'морось.';
      break;
    case 'heavy intensity drizzle':
      weather = 'сильная морось.';
      break;
    case 'light intensity drizzle rain':
      weather = 'небольшой дождь и морось.';
      break;
    case 'drizzle rain':
      weather = 'дождь и морось.';
      break;
    case 'heavy intensity drizzle rain':
      weather = 'сильный дождь и морось.';
      break;
    case 'shower rain and drizzle':
      weather = 'дождь и морось.';
      break;
    case 'heavy shower rain and drizzle':
      weather = 'сильный ливень и морось.';
      break;
    case 'shower drizzle':
      weather = 'морось.';
      break;
    case 'light rain':
      weather = 'небольшой дождь.';
      break;
    case 'moderate rain':
      weather = 'умереннные дожди.';
      break;
    case 'heavy intensity rain':
      weather = 'сильный дождь.';
      break;
    case 'very heavy rain':
      weather = 'очень сильный дождь.';
      break;
    case 'extreme rain':
      weather = 'экстримально сильный дождь.';
      break;
    case 'freezing rain':
      weather = 'ледяной дождь.';
      break;
    case 'light intensity shower rain':
      weather = 'обыкновенный ливень.';
      break;
    case 'shower rain':
      weather = 'ливень.';
      break;
    case 'heavy intensity shower rain':
      weather = 'сильный ливень.';
      break;
    case 'ragged shower rain':
      weather = 'переменчивый ливень.';
      break;
    case 'light snow':
      weather = 'небольшой снег.';
      break;
    case 'snow':
      weather = 'снег.';
      break;
    case 'heavy snow':
      weather = 'сильный снег.';
      break;
    case 'sleet':
      weather = 'мокрый снег.';
      break;
    case 'shower sleet':
      weather = 'сильный мокрый снег.';
      break;
    case 'light rain and snow':
      weather = 'небольшой снег с дождем.';
      break;
    case 'rain and snow':
      weather = 'снег с дождем.';
      break;
    case 'light shower snow':
      weather = 'небольшоый снегопад.';
      break;
    case 'shower snow':
      weather = 'снегопад.';
      break;
    case 'heavy shower snow':
      weather = 'сильный снегопад.';
      break;
    case 'mist':
      weather = 'дымка.';
      break;
    case 'smoke':
      weather = 'смог.';
      break;
    case 'haze':
      weather = 'мгла несусветная.';
      break;
    case 'sand, dust whirls':
      weather = 'песок, пыль кружит.';
      break;
    case 'fog':
      weather = 'дымка.';
      break;
    case 'sand':
      weather = 'песок кружит.';
      break;
    case 'dust':
      weather = 'пыльно.';
      break;
    case 'volcanic ash':
      weather = 'в воздухе вулканический пепел.';
      break;
    case 'squalls':
      weather = 'шквалы ветра.';
      break;
    case 'tornado':
      weather = 'торнадо.';
      break;
    case 'clear sky':
      weather = 'небо чистое.';
      break;
    case 'sky is clear':
      weather = 'небо чистое.';
      break;

    case 'few clouds':
      weather = 'легкая облачность.';
      break;
    case 'scattered clouds':
      weather = 'рассеянная облачность.';
      break;
    case 'broken clouds':
      weather = 'рассеянная облачность.';
      break;
    case 'overcast clouds':
      weather = 'пасмурные тучи.';
      break;
    case 'tropical storm':
      weather = 'тропический шторм.';
      break;
    case 'hurricane':
      weather = 'ураган.';
      break;
    case 'cold':
      weather = 'холод несусветный.';
      break;
    case 'hot':
      weather = 'жара.';
      break;
    case 'windy':
      weather = 'ветренно.';
      break;
    case 'hail':
      weather = 'град.';
      break;
    case 'light breeze':
      weather = 'легкий бриз.';
      break;
    case 'gentle breeze':
      weather = 'нежный бриз.';
      break;
    case 'moderate breeze':
      weather = 'обычный бриз.';
      break;
    case 'fresh breeze':
      weather = 'освежающий.';
      break;
    case 'strong breeze':
      weather = 'сильный бриз.';
      break;
    case 'high wind, near gale':
      weather = 'сильный ветер, близкий к шторму.';
      break;
    case 'gale':
      weather = 'шторм.';
      break;
    case 'storm':
      weather = 'шторм.';
      break;
    case 'violent storm':
      weather = 'сильный шторм.';
      break;
    default:
      weather = '';
  }
  return weather;
}

function degreeWordForm(int) {
  let degreeWord = 'градусов';
  const one = [1, -1, 21, -21, 31, -31, 41, -41, 51, -51, 61, -61];
  const two = [2, 3, 4, -2, -3, -4, 22, 23, 24, -22, -23, -24, 32,
               33, 34, -32, -33, -34, 42, 43, 44, -42, -43, -44,
               52, 53, 54, -52, -53, -54, 62, 63, 64, -62, -63, -64];
  if (one.indexOf(int) > -1) { degreeWord = 'градус'; } else if (two.indexOf(int) > -1) {    degreeWord = 'градуса'; }
  return degreeWord;
}

function speak(stringToSpeak: string, command: string) {
  const synth = window.speechSynthesis;
  const pitchValue = 1.0;
  const rateValue = 1.0;
  let voices = [];
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }

  if (command !== '') {
    const utterThis = new SpeechSynthesisUtterance(stringToSpeak);
    utterThis.onend = function (event) {
      console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
    }
    voices = synth.getVoices();
    utterThis.pitch = 1.0;
    utterThis.rate = 1.0;
    console.log(voices);
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].lang === 'ru-RU') {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);
  }
}

export class WeatherService {
  result = '';

  returnWeather (additionalString: string) {
          let temp = 0;
          let description = '';
          const XHR: any = new XMLHttpRequest();
          XHR.onreadystatechange = function() {
              if (XHR.readyState === 4) {
                  if (XHR.status === 200) {
                      temp = JSON.parse(XHR.responseText).list[0].main.temp;
                      description = JSON.parse(XHR.responseText).list['0'].weather['0'].description;
                      this.result = additionalString + '. ' + 'За окном. '
                        + Math.ceil(temp) + degreeWordForm(Math.ceil(temp)) + '.' + getWeather(description);
                      speak(this.result, 'погода');
                      return this.result;
                  } else {
                      console.log('Error');
                      return this.result;
                  }
              }
          };
          XHR.open('GET',
                   'https://api.openweathermap.org/data/2.5/find?q=Moscow&units=metric&type=like&APPID=28f8ed9bac953b0e26819f8872047e4b');
          XHR.send();

          console.log(this.result);
          return this.result;
      }




  }
