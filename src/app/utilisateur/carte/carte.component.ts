import { Component, input } from '@angular/core';
import { OpenStreetMapProvider,GeoSearchControl, SearchControl } from 'leaflet-geosearch';



import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import Geocoder from 'leaflet-control-geocoder';
@Component({
  selector: 'app-carte',
  standalone: true,
  imports: [],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})
export class CarteComponent {

  async ngAfterViewInit() {

    let map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);



    var polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(map);

    const control = L.Routing.control({
      waypoints: [
        L.latLng(12.241851, -1.55676),
        L.latLng(12.441851, -1.55676)
      ],
      routeWhileDragging: true
    }).addTo(map);

    const provider = new OpenStreetMapProvider();

    const search  = SearchControl({
      provider: provider,
      style: 'bar',
      showMarker: true,
      marker: {
        // optional: L.Marker    - default L.Icon.Default
        icon: new L.Icon.Default(),
        draggable: false,
      },
      resultFormat: ({ result } : any) => result.label,
      showPopup: true,
      autoClose: true,
      retainZoomLevel: false,
      animateZoom: true,
      keepResult: false,
      searchLabel: 'Recherche'
    });

    map.addControl(search);
    //const geocoder = L.Control.Geocoder().addTo(map);

  }
}
