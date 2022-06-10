import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public navigation: any[] = [
    {
      title: 'Creator',
      url: 'creator',
    },
    {
      title: 'Indexer',
      url: 'indexer',
    },
    {
      title: 'admin',
      url: 'admin',
    },
    {
      title: 'Auditor',
      url: 'auditor',
    },
    {
      title: 'Visor',
      url: 'visor',
    },
  ];

  constructor(private router: Router, private service: AuthService) {}

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  getCurrentUrl() {
    const url = this.router.url;
    const subUrl = url.split('/')[1];
    const subUrlCaps = this.capitalizeUrl(subUrl);

    return subUrlCaps;
  }

  capitalizeUrl(url: string) {
    return url.charAt(0).toUpperCase() + url.slice(1);
  }

  logout() {
    this.service.logout();
  }

  isAuthenticated() {
    return this.service.isAuthenticated();
  }

  getUser() {
    return this.service.getUser();
  }
}
