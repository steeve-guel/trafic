import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  menu() {
    let menu = document.querySelector('#menu-icon');
    let navBar = document.querySelector('.nav-bar');

    console.log(menu);

    menu?.classList.toggle('bx-x');
    navBar?.classList.toggle('open');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userProfile');
    window.location.href = '/';
  }

}
