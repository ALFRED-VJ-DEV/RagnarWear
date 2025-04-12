import { CarritoService } from './../carrito/Services/carrito.service';
import { Component, OnInit } from '@angular/core';
import { colorMap } from './Colores/colores';
import { Playera } from '../../Components/t-Shirt/Interface/playera';

@Component({
  selector: 'app-store-playeras',
  templateUrl: './store-playeras.component.html',
  styleUrls: ['./store-playeras.component.scss']
})
export class StorePlayerasComponent implements OnInit {
  colores: any = colorMap;
  playeras: Playera[] = [];
  currentIndex: number = 0;
  currentPlayera: any = null;
  tallas: string = "";

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.playeras = this.carritoService.getPlayerasSolicitadas;

    if (this.playeras.length > 0) {
      this.playeras.map( t => {
        this.tallas = this.tallas + t.talla + ", "
      })
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
        console.log({currentPlayera: this.currentPlayera})
      }, 50);
    }
  }

  // En tu componente.ts
enviarWhatsApp() {
  const pedido = this.mapearPlayeras();
  const numero = '5579947397'; // Reemplaza con el número deseado
  const mensaje = `Hola, estoy interesado en tu servicio, mi pedido es el siguiente: ${JSON.stringify(pedido, null, 2)}`;
  console.log({ pedido })
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank'); // Abre en una nueva pestaña o ventana
}

  mapearPlayeras() {
    console.log("Entrando a mapear playeras")
    let contador: number = 0;
    const pedidoPlayeras: Playera[] = []
    while (contador < this.playeras.length) {
      ++contador;
      console.log({ playerasOriginales: this.playeras[contador - 1] })
      let playera: Playera = {
        colorCuerpo: this.colores[this.playeras[contador - 1].colorCuerpo],
        colorMangas: this.colores[this.playeras[contador - 1].colorMangas],
        colorTiras: this.colores[this.playeras[contador - 1].colorTiras],
        talla: this.colores[this.playeras[contador - 1].talla]
      }
      pedidoPlayeras.push(playera);
    }
    return pedidoPlayeras
  }
}
