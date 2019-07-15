import { IDisplayElement } from "./WeatherData";

export class Display2 implements IDisplayElement {
  display() {
    console.warn("display 2");
  }

  update(temperature: number, humidity: number, pressure: number) {
    console.warn(`display 2 report: temperature: ${temperature}, humidity: ${humidity}, pressure: ${pressure}`);
  }
}
