import { CarritoService } from './../carrito/Services/carrito.service';
import { Component, OnInit } from '@angular/core';
import { colorMap } from './Colores/colores';
import { Playera } from '../../Components/t-Shirt/Interface/playera';
import { Router } from '@angular/router';

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

  constructor(private carritoService: CarritoService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.playeras = this.carritoService.getPlayerasSolicitadas;

    if (this.playeras.length > 0) {
      this.playeras.map( t => {
        this.tallas = this.tallas + t.talla.toUpperCase() + ", "
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
    const numero = '5579947397'; // Número de destino
    const mensaje = `Hola, estoy interesado en tu servicio. %0A%0A ${pedido}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }


mapearPlayeras(): string {
  console.log("Entrando a mapear playeras");
  let pedido = '🛍 *Mi pedido es el siguiente:*\n\n';

  this.playeras.forEach((playera, index) => {
    pedido += `${index + 1}. *Playera talla ${playera.talla.toUpperCase()}*\n`;
    pedido += `   - Color de cuerpo: ${this.colores[playera.colorCuerpo]}\n`;
    pedido += `   - Color de mangas: ${this.colores[playera.colorMangas]}\n\n`;
  });

  return pedido;
}
  reenviarCombinarPlayera(){
    this.router.navigate(['/personalizar']);
  }
}
