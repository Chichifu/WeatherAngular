import {Component, OnInit} from '@angular/core';
import {WeatherService} from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather;

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {
    this.weatherService.getWeather(`Vigo`, `spa`).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  getWeather(ciudad: string, pais: string) {
    this.weatherService.getWeather(ciudad, pais).subscribe(
      res => {
        console.log(this.weather);
        this.weather = res;
      },
      err => console.log(err)
    );
  }

  subbmitLocation(ciudad: HTMLInputElement, pais: HTMLInputElement) {
    if (ciudad.value && pais.value) {
      this.getWeather(ciudad.value, pais.value);
      ciudad.value = '';
      pais.value = '';
    } else {
      alert('Inserte datos');
    }
    ciudad.focus();
    return false;
  }
}
