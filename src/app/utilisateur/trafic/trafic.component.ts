import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './../../../../../traffic/src/app/utilisateur/navbar/navbar.component';
import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-trafic',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, NavBarComponent],
  templateUrl: './trafic.component.html',
  styleUrl: './trafic.component.css'
})
export class TraficComponent {

}
