declare module 'leaflet-search' {
  import * as L from 'leaflet';
  export interface SearchOptions {
    layer: L.LayerGroup;
    initial?: boolean;
    zoom?: number;
    marker?: boolean;
    moveToLocation?: (latlng: L.LatLng) => void;
    position?: string;
  }
  export class Control {
    constructor(options: SearchOptions);
  }
}
