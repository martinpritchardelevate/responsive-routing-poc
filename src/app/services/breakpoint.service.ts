import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  public isDesktop = true;

  constructor(public breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        this.isDesktop = state.matches;
      });
  }
}
