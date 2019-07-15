import { IDisplayElement, IObserver } from "./WeatherData";

export class Display1 implements IDisplayElement, IObserver {
  display() {
    console.warn("display 1");
  }

  update(temperature: number, humidity: number, pressure: number) {
    console.warn(`display 1 report: temperature: ${temperature}, humidity: ${humidity}, pressure: ${pressure}`);
  }
}
