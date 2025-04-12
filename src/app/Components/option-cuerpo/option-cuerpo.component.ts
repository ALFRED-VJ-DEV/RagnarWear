import { Component, OnInit } from '@angular/core';
import { CombinarCuerpoService } from './Service/combinar-cuerpo.service';

@Component({
  selector: 'app-option-cuerpo',
  templateUrl: './option-cuerpo.component.html',
  styleUrls: ['./option-cuerpo.component.scss']
})
export class OptionCuerpoComponent implements OnInit {
 selectedColor: string = ''; // Variable para almacenar el color

  constructor(
    private combinarCuerpoService: CombinarCuerpoService,
  ) { }
  ngOnInit() {
  }

  onColorChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const colorDiv = input.nextElementSibling as HTMLElement;
    this.selectedColor = window.getComputedStyle(colorDiv).backgroundColor;
    this.combinarCuerpoService.setColor(window.getComputedStyle(colorDiv).backgroundColor);
  }

}
