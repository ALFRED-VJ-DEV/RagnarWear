import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Playera } from '../../../Components/t-Shirt/Interface/playera';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private playerasSolicitadasSubject: BehaviorSubject<Playera[]> = new BehaviorSubject<any[]>([]);
  playerasSolicitadas$ = this.playerasSolicitadasSubject.asObservable();

  constructor() { }

  setPlayerasSolicitadas(value:Playera){
    let container = this.getPlayerasSolicitadas;
    container.push(value);
    this.playerasSolicitadasSubject.next(container)
  }
  get getPlayerasSolicitadas():Playera[]{
    return this.playerasSolicitadasSubject.getValue();
  }
}


