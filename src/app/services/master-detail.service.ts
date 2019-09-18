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
    this.router.navigate(url, {
      relativeTo: this.breakpoints.isDesktop ?
        route : route.parent
    });
  }

  navigateBack(route: ActivatedRoute) {
    this.router.navigate(['../'], {
      relativeTo: this.breakpoints.isDesktop ?
        route.parent : route
    });
  }

}
