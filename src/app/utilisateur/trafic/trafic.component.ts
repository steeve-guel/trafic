import { RouterOutlet } from '@angular/router';

import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { Component } from '@angular/core';

@Component({
  selector: 'app-trafic',
  standalone: true,
  imports: [NavBarComponent,RouterOutlet, NavBarComponent],
  templateUrl: './trafic.component.html',
  styleUrl: './trafic.component.css'
})
export class TraficComponent {

}
