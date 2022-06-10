import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ValidatorGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }
  canActivate(): boolean {
    if (this.auth.getRol() !== 3) {
      switch (this.auth.getRol()) {
        case 0:
          this.router.navigate(['/admin']);

          break;
        case 1:
          this.router.navigate(['/creator']);

          break;
        case 2:
          this.router.navigate(['/indexer']);

          break;
        case 3:
          this.router.navigate(['/auditor']);

          break;
        case 4:
          this.router.navigate(['/visor']);

          break;
      }      return false;
    }

    return true;
  }
}
