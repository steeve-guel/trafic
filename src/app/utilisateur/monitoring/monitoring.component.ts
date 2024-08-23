import { Component } from '@angular/core';
import { CarteComponent } from '../carte/carte.component';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [CarteComponent],
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
