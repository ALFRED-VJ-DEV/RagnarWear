import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-t-Shirt',
  templateUrl: './t-Shirt.component.html',
  styleUrls: ['./t-Shirt.component.scss']
})
export class TShirtComponent implements OnInit {
  @Input() playera: any;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    console.log({P: this.playera});

    // Asegúrate de que 'colorMangas' esté definido en playera antes de intentar aplicarlo
    if (this.playera && this.playera.colorMangas) {
      console.log("Estoy entrando en colorMangas");
      // Aplicamos el color al SVG con clase 'T-S-m'
      const svgElement = this.el.nativeElement.querySelector('.T-S-m');
      console.log({svgElement});

      // Establecer el color directamente en el 'fill' del SVG
      this.renderer.setStyle(svgElement, 'fill', this.playera.colorMangas);
    }

    // Si también deseas aplicar el color en otros SVGs, repite el proceso para cada uno
    if (this.playera && this.playera.colorCuerpo) {
      console.log("Estoy entrando en colorCuerpo");
      const svgElementCuerpo = this.el.nativeElement.querySelector('.T-S-c');
      console.log({svgElementCuerpo});

      // Aplicar el color al cuerpo
      this.renderer.setStyle(svgElementCuerpo, 'fill', this.playera.colorCuerpo);
    }

    if (this.playera && this.playera.colorTiras) {
      console.log("Estoy entrando en colorTiras");
      const svgElementTiras = this.el.nativeElement.querySelector('.T-S-t');
      console.log({svgElementTiras});

      // Aplicar el color a las tiras
      this.renderer.setStyle(svgElementTiras, 'fill', this.playera.colorTiras);
    }
  }
}
