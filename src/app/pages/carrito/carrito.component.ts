import { Subscription } from 'rxjs';
import { CarritoService } from './Services/carrito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  private subs:Subscription[] = [];
  constructor(
    private carritoService: CarritoService,
  ) { }

  ngOnInit() {

  }

}
