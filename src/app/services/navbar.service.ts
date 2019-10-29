import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private navbarIsOnHomePage: Subject<boolean> = new BehaviorSubject<boolean>(false);
  $obsIsHomePage: Observable<boolean>;

  constructor() {
    this.$obsIsHomePage = this.navbarIsOnHomePage.asObservable();
  }

  setValueRouteIsHome(value: boolean) {
    this.navbarIsOnHomePage.next(value);
  }

  getValueRouteIsHome(): Observable<boolean> {
    return this.$obsIsHomePage;
  }
}
