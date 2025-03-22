import { CarritoService } from './../carrito/Services/carrito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-playeras',
  templateUrl: './store-playeras.component.html',
  styleUrls: ['./store-playeras.component.scss']
})
export class StorePlayerasComponent implements OnInit {
  playeras: any[] = [];
  currentIndex: number = 0;
  currentPlayera: any = null;

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.playeras = this.carritoService.getPlayerasSolicitadas;
    if (this.playeras.length > 0) {
      this.currentPlayera = this.playeras[0]; // Inicializamos con la primera playera
    }
  }

  // Método para cambiar la playera
  changePlayera(indexChange: number) {
    const newIndex = this.currentIndex + indexChange;
    if (newIndex >= 0 && newIndex < this.playeras.length) {
      this.currentIndex = newIndex;

      // 🔥 Eliminamos el componente antes de asignar la nueva playera
      this.currentPlayera = null;

      // 🔥 Forzamos la reasignación con un pequeño delay
      setTimeout(() => {
        this.currentPlayera = this.playeras[newIndex];
      }, 50);
    }
  }
}
