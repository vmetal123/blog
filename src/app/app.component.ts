import { NavbarService } from './services/navbar.service';
import { slideInAnimation } from './animations/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import RoutesConstants from '../app/constants/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = '{ MVC Dev }';
  currentUrl: string;

  constructor(
    private router: Router,
    private navbarService: NavbarService
    ) { this.getCurrentRoute(); }

  ngOnInit() { }

  getCurrentRoute() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        this.validateIsHomeUrl();
      }
    });
  }

  validateIsHomeUrl() {
    if (this.currentUrl === RoutesConstants.HOME_PATH) {
      this.navbarService.setValueRouteIsHome(true);
    } else {
      this.navbarService.setValueRouteIsHome(false);
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
