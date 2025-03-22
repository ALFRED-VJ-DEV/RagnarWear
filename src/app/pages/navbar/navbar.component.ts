import { CarritoService } from './../carrito/Services/carrito.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private subs: Subscription[] = [];
  showM: boolean = false;
  carritoTotla: number = 0;
  constructor(
    private router: Router,
    private carritoService:CarritoService
  ) { }

  ngOnInit() {
    this.subs.push(
      this.carritoService.playerasSolicitadas$.subscribe(value => {
        this.carritoTotla = value.length
        console.log({value})
      })
    );
  }
  goTPers() {
    this.router.navigate(['personalizar']);
  }
  showMenu() {
    console.log("menu: ", this.showM)
    this.showM = !this.showM;
  }
  ngOnDestroy(){
    if(this.subs.length){
      this.subs.forEach(s => s.unsubscribe());
    }
  }
}
