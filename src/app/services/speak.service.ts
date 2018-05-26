export class SpeakService {

  synth: any;
  pitchValue: any;
  rateValue: any;
  voices: any;

  speak(stringToSpeak: string) {
    this.synth = window.speechSynthesis;
    this.pitchValue = 0.8;
    this.rateValue = 1.0;
    this.voices = [];

    if (this.synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }

      const utterThis = new SpeechSynthesisUtterance(stringToSpeak);
      utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
      }
      utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
      }
      this.voices = this.synth.getVoices();
      console.log(this.voices);
      utterThis.pitch = 1.0;
      utterThis.rate = 1.0;
      for (let i = 0; i < this.voices.length; i++) {
        if (this.voices[i].lang === 'ru-RU') {
          utterThis.voice = this.voices[i];
        }
      }
      this.synth.speak(utterThis);

  }
}
