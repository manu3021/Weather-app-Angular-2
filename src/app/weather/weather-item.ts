
export class  WeatherItem {
  constructor( public cityName: string, 
  	           public icon: string, 
  	           public description: string, 
  	           public temperature: number, 
  	           public humidity: number,
  	           public id: number) {
  }
}