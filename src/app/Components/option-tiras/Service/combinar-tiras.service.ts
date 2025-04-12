import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CombinarTirasService {

  private colorSubject: BehaviorSubject<string> = new BehaviorSubject<string>("rgb(0, 0, 0)");
  color$ = this.colorSubject.asObservable();

  constructor() { }

  setColor(value: string) {
    this.colorSubject.next(value);
  }

  get getColor(): string {
    return this.colorSubject.getValue();
  }

}
