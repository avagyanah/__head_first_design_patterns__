import { IDisplayElement } from "./WeatherData";

export class Display3 implements IDisplayElement {
  display() {
    console.warn("display 3");
  }

  update(temperature: number, humidity: number, pressure: number) {
    console.warn(`display 3 report: temperature: ${temperature}, humidity: ${humidity}, pressure: ${pressure}`);
  }
}
