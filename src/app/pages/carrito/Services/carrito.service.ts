import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private playerasSolicitadasSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  playerasSolicitadas$ = this.playerasSolicitadasSubject.asObservable();

  constructor() { }

  setPlayerasSolicitadas(value:any){
    console.log("entrando");
    let container = this.getPlayerasSolicitadas;
    container.push(value);
    this.playerasSolicitadasSubject.next(container)
  }
  get getPlayerasSolicitadas():any[]{
    return this.playerasSolicitadasSubject.getValue();
  }
}
