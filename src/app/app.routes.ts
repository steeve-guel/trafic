import { Routes } from '@angular/router';
import { TraficComponent } from './utilisateur/trafic/trafic.component';
import { AcceuilComponent } from './utilisateur/acceuil/acceuil.component';
import { ItineraireComponent } from './utilisateur/itineraire/itineraire.component';
import { MonitoringComponent } from './utilisateur/monitoring/monitoring.component';
import { ConfigurationComponent } from './utilisateur/configuration/configuration.component';
import { NotificationsComponent } from './utilisateur/notifications/notifications.component';
import { RegisterComponent } from './utilisateur/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'user-trafic-gestion', pathMatch: 'full' },
  {path:'register',component:RegisterComponent},
  {
    path: 'user-trafic-gestion', component: TraficComponent, children: [
      { path: 'acceuil', component: AcceuilComponent },
      { path: 'itineraire', component: ItineraireComponent },
      { path: 'trafic-monitoring', component: MonitoringComponent },
      { path: 'configuration', component: ConfigurationComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
    ]
  }
];
