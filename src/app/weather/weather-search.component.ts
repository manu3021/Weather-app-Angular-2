import { Component  } from '@angular/core';
import {WeatherItem} from './weather-item';
import {WeatherService} from './weather.service';
@Component({
   selector: 'weather-search',
   template: `
          <section class="container  row">
            <form (ngSubmit)="onSubmit(location.value)" #f="ngForm">
            	<div class="input-field col m6">
		          <input #location type="text" id="city"  required>
		          <label for="first_name"> Enter City Name</label>
		        </div>
            	
            	<button class="btn col m1" type="submit">Add City</button>
            </form>
            
          </section>
    `,
  providers: [WeatherService]
})
export class WeatherSearchComponent {
	constructor(private _weatherService: WeatherService){}
	onSubmit(cityName: string) {
		/*alert(cityName);*/
		this._weatherService.searchWeatherData(cityName)
		.subscribe(
          data => {
          	const weatherItem = new WeatherItem(data.name, data.weather[0].icon , data.weather[0].description, data.main.temp, data.main.humidity, data.id);
          	this._weatherService.addWeatherItem(weatherItem);
          }
	    )
	}
}