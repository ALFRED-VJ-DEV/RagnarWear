import { CombinarMangasService } from './Services/combinar-mangas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-mangas',
  templateUrl: './option-mangas.component.html',
  styleUrls: ['./option-mangas.component.scss']
})
export class OptionMangasComponent implements OnInit {
  selectedColor: string = ''; // Variable para almacenar el color

  constructor(
    private combinarMangasService: CombinarMangasService,
  ) { }
  ngOnInit() {
  }

  onColorChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const colorDiv = input.nextElementSibling as HTMLElement;
    this.selectedColor = window.getComputedStyle(colorDiv).backgroundColor;
    console.log('Color seleccionado:', this.selectedColor); // RGB del color
    this.combinarMangasService.setColor(window.getComputedStyle(colorDiv).backgroundColor);
  }

}
