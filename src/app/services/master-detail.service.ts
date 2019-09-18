import { Injectable } from '@angular/core';
import { BreakpointService } from './breakpoint.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MasterDetailService {

  constructor(
    public router: Router,
    public breakpoints: BreakpointService) {

  }

  navigateToDetail(url: Array<string>, route: ActivatedRoute) {
    // NOTE: Switching between mobile and desktop behaviour
    //       is achieved by simply toggling the routers
    //       `relativeTo` param/option...
    this.router.navigate(url, {
      relativeTo: this.breakpoints.isDesktop ?
        route : route.parent
    });
  }

  navigateBack(route: ActivatedRoute) {
    // NOTE: Switching between mobile and desktop behaviour
    //       is achieved by simply toggling the routers
    //       `relativeTo` param/option...
    this.router.navigate(['../'], {
      relativeTo: this.breakpoints.isDesktop ?
        route.parent : route
    });
  }

}
