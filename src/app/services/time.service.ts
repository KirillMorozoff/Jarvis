export class TimeService {
     getTime() {
        const date = new Date();
        const options = {
                      month: 'long',
                      day: 'numeric',
                      weekday: 'long',
                      timezone: 'UTC',
                      hour: 'numeric',
                      minute: 'numeric',
                    };
        const time = 'Сегодня ' + date.toLocaleString('ru', options);
        return time;
}
}
