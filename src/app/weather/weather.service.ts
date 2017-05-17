import {Injectable} from '@angular/core';
import {WeatherItem} from './weather-item';
import { WEATHER_ITEMS } from './weather.data';
import { Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable() 
export class WeatherService {
  constructor(private _http: Http ) {}
    getWeatherItems() {
  	  return WEATHER_ITEMS;
    }
  addWeatherItem(weatherItem: WeatherItem) {
       WEATHER_ITEMS.push(weatherItem);   
  }
  searchWeatherData(cityName: string): Observable<any> {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=11acd2105586ddb243141c70bb16f14d&units=metric')
    	.map(response => response.json())
    	.catch(error => {
    		console.error(error);
    		return Observable.throw(error.json())
    	})
  }
}