import { CarritoService } from './../carrito/Services/carrito.service';
import { Subscription } from 'rxjs';
import { CombinarMangasService } from './../../Components/option-mangas/Services/combinar-mangas.service';
import { Component, OnInit } from '@angular/core';
import { CombinarCuerpoService } from '../../Components/option-cuerpo/Service/combinar-cuerpo.service';
import { CombinarTirasService } from '../../Components/option-tiras/Service/combinar-tiras.service';

@Component({
  selector: 'app-combinar',
  templateUrl: './combinar.component.html',
  styleUrls: ['./combinar.component.scss']
})
export class CombinarComponent implements OnInit {
  colorM: string = "rgb(0, 0, 128)";
  colorC: string = "rgb(0, 0, 0)";
  colorT: string = "rgb(0, 0, 0)";
  opcionSeleccionada: string = 'm'; // Almacena la opción seleccionada


  private subs: Subscription[] = [];

  constructor(
    private combinarMangasService: CombinarMangasService,
    private combinarCuerpoService: CombinarCuerpoService,
    private combinarTirasService: CombinarTirasService,
    private carritoService: CarritoService,
  ) { }

  ngOnInit() {
    this.subs.push(
      this.combinarMangasService.color$.subscribe(color => {
        this.colorM = color;
        this.changeC();
      })
    );
    this.subs.push(
      this.combinarCuerpoService.color$.subscribe(color => {
        this.colorC = color;
        this.changeC();
      })
    );
    this.subs.push(
      this.combinarTirasService.color$.subscribe(color => {
        this.colorT = color;
        this.changeC();
      })
    );
  }
  changeC() {
    // Cambiar el color de los SVG específicos por su clase
    const tSC = document.querySelector('.T-S-c'); // Selecciona el SVG con la clase T-S-c
    const tSM = document.querySelector('.T-S-m'); // Selecciona el SVG con la clase T-S-m
    const tST = document.querySelector('.T-S-t'); // Selecciona el SVG con la clase T-S-t

    let colorMangas = this.combinarMangasService.getColor;
    // Cambiar los colores de los elementos `path` dentro de cada SVG
    if (tSC) {
      const pathsSC = tSC.querySelectorAll('path');
      pathsSC.forEach(path => path.setAttribute('fill', this.colorC)); // Color gris para T-S-c
    }

    if (tSM) {
      const pathsSM = tSM.querySelectorAll('path');
      pathsSM.forEach(path => path.setAttribute('fill', this.colorM)); // Color azul para T-S-m
    }

    if (tST) {
      const pathsST = tST.querySelectorAll('path');
      pathsST.forEach(path => path.setAttribute('fill', this.colorT)); // Color verde para T-S-t
    }
  }

  add(){
    let colorMangas: string = this.combinarMangasService.getColor;
    let colorCuerpo: string = this.combinarCuerpoService.getColor;
    let colorTiras: string = this.combinarTirasService.getColor;
    let talla: string = this.opcionSeleccionada;
    const Playera = {
      colorCuerpo,
      colorMangas,
      colorTiras,
      talla
    }
    this.carritoService.setPlayerasSolicitadas(Playera);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.subs.length){
      this.subs.forEach(s => s.unsubscribe());
    }
  }
}
