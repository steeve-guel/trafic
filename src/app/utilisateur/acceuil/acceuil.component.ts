import { CarteMapBoxComponent } from './../carte-map-box/carte-map-box.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CarteMapBoxComponent],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {

  constructor(private router:Router){

  }

  goItineraire(){
    this.router.navigate(['/user-trafic-gestion/itineraire']);
  }

  goSurveillance(){
    this.router.navigate(['/user-trafic-gestion/trafic-monitoring']);
  }

  goNofications(){
    this.router.navigate(['/user-trafic-gestion/notifications']);
  }
}
