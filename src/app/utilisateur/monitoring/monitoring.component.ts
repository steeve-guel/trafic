import { Component } from '@angular/core';
import { CarteComponent } from '../carte/carte.component';
import { CarteMapBoxComponent } from '../carte-map-box/carte-map-box.component';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [CarteComponent,CarteMapBoxComponent],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.css'
})
export class MonitoringComponent {

  traficInfo!: any;

  getRouteFromApi() {
    this.traficInfo = {
      congestion: 70,
        speed: 30,
        incidents: [
          { type: "Accident", location: "Rue de la Paix" },
          { type: "Construction", location: "Boulevard Haussmann" }
        ]
    }
  }
}
