import { NavbarService } from './../../services/navbar.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  @Input() titleApp: string;
  isHomePage: boolean;
  subscription: Subscription;

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.subscription = this.navbarService.getValueRouteIsHome().subscribe(
      value => {
        this.isHomePage = value;
        console.log(this.isHomePage);
      });
  }

  getNavbarBackground() {
    if (this.isHomePage) {
      return '';
    } else {
      return 'navbar-inactive';
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
