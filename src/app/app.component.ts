import { Component } from '@angular/core';
import { WeatherListComponent } from './weather/weather-list.component';
import { WeatherSearchComponent } from './weather/weather-search.component';

@Component({
  selector: 'app-root',
  template: ` <nav>
                <div class="container">
                  <header class="nav-wrapper center"> 
                    <a class="page-title"> Angular Weather App </a>
                  </header>
                  </div>
              </nav>
            <weather-search></weather-search>
             <weather-list></weather-list>`,
 
})
export class AppComponent {}

