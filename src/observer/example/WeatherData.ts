export class WeatherData implements ISubject {
  private observers: IObserver[];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
  }

  public registerObserver(o: IObserver): void {
    const index = this.observers.indexOf(o);
    if (index !== -1) {
      return;
    }

    this.observers.push(o);
  }

  public removeObserver(o: IObserver): void {
    const index = this.observers.indexOf(o);
    if (index === -1) {
      return;
    }

    this.observers.splice(index, 1);
  }

  public measurementChanged(): void {
    this.notifyObservers();
  }

  public notifyObservers(): void {
    this.observers.forEach((observer: IObserver) => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementChanged();
  }
}

interface ISubject {
  registerObserver: (o: IObserver) => void;
  removeObserver: (o: IObserver) => void;
  notifyObservers: () => void;
}

export interface IObserver {
  update: (temperature: number, humidity: number, pressure: number) => void;
}

export interface IDisplayElement {
  display: () => void;
}
