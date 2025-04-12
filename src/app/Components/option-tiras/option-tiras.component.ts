import { Component, OnInit } from '@angular/core';
import { CombinarTirasService } from './Service/combinar-tiras.service';

@Component({
  selector: 'app-option-tiras',
  templateUrl: './option-tiras.component.html',
  styleUrls: ['./option-tiras.component.scss']
})
export class OptionTirasComponent implements OnInit {

  selectedColor: string = ''; // Variable para almacenar el color

  constructor(
    private combinarTirasService: CombinarTirasService,
  ) { }
  ngOnInit() {
  }

  onColorChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const colorDiv = input.nextElementSibling as HTMLElement;
    this.selectedColor = window.getComputedStyle(colorDiv).backgroundColor;
    this.combinarTirasService.setColor(window.getComputedStyle(colorDiv).backgroundColor);
  }


}
