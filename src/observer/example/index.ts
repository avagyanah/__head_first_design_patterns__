import { WeatherData } from "./WeatherData";
import { Display1 } from "./Display1";
import { Display2 } from "./Display2";
import { Display3 } from "./Display3";

export class Example {
  constructor() {
    const weatherData = new WeatherData();
    const display1 = new Display1();
    const display2 = new Display2();
    const display3 = new Display3();

    weatherData.registerObserver(display1);

    weatherData.registerObserver(display2);

    weatherData.registerObserver(display3);
    weatherData.removeObserver(display3);

    weatherData.setMeasurements(1, 2, 3);
  }
}

new Example();
