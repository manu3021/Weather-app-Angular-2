import { Component, Input } from '@angular/core';
import { WeatherItem } from './weather-item';


@Component ({
	selector: 'weather-item',
    template: `<article class="row container  z-depth-5">
                 <div class="col m10 s12">
                 	<h5>{{ weatherItem.cityName }}</h5>
                 	<h6><span class="info">{{ weatherItem.description }}: <img src="http://openweathermap.org/img/w/{{weatherItem.icon}}.png" /></span></h6>
                 	<h6><span class="temp">Temp: {{ weatherItem.temperature }} &#8451;</span></h6>
                    <h6>Humidity:<span>{{ weatherItem.humidity }}</span></h6>      
                    </div>

                 
               </article>`,
})

export class WeatherItemComponent {
   @Input('item') weatherItem: WeatherItem; 
}