// src/leaflet-control-geocoder.d.ts
declare module 'leaflet-control-geocoder' {
  import * as L from 'leaflet';

  export interface GeocoderOptions {
    placeholder?: string;
    errorMessage?: string;
  }

  export function control(options?: GeocoderOptions): L.Control;
}
