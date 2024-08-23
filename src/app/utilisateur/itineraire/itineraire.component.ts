import { Component } from '@angular/core';
import { CarteComponent } from '../carte/carte.component';

@Component({
  selector: 'app-itineraire',
  standalone: true,
  imports: [CarteComponent],
  templateUrl: './itineraire.component.html',
  styleUrl: './itineraire.component.css'
})
export class ItineraireComponent {

  itineraire!: any;

  getRouteFromApi() {
    this.itineraire = {
      distance: 20.5,
      duration: 30
    }
  }
}
