import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showM: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  goTPers() {
    this.router.navigate(['personalizar']);
  }
  showMenu() {
    console.log("menu: ", this.showM)
    this.showM = !this.showM;
  }
}
