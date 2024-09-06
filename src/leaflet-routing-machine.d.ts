// src/leaflet-routing-machine.d.ts
declare module 'leaflet-routing-machine' {
  import * as L from 'leaflet';
  export interface RoutingControlOptions {
    waypoints?: L.LatLngExpression[];
    routeWhileDragging?: boolean;
    // Ajoutez d'autres options si nécessaire
  }

  export function control(options: RoutingControlOptions): L.Control;
}
