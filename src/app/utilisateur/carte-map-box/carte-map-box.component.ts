import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-carte-map-box',
  standalone: true,
  imports: [],
  templateUrl: './carte-map-box.component.html',
  styleUrl: './carte-map-box.component.css'
})
export class CarteMapBoxComponent {

  map!: mapboxgl.Map;

  constructor() {
    //(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZmFyayIsImEiOiJjbTBxcGJpdTgwMGoxMmlzYmY5bDM3Z3N2In0.ek4Hi4DNnegRH5sA4NChhg';
  }

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken:'pk.eyJ1IjoiZmFyayIsImEiOiJjbTBxcGJpdTgwMGoxMmlzYmY5bDM3Z3N2In0.ek4Hi4DNnegRH5sA4NChhg',
      container: 'map', // ID de l'élément HTML
      style: 'mapbox://styles/mapbox/streets-v11', // Style de la carte
      center: [2.3522, 48.8566], // Longitude, latitude (Paris)
      zoom: 12 // Niveau de zoom
    });
  }
}
