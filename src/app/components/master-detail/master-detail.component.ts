import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { BreakpointService } from '../../services';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
})
export class MasterDetailComponent implements OnInit {

  @ViewChild(RouterOutlet, { static: false })
  detailOutlet: RouterOutlet;

  private isOutletActive = false;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public breakpointObserver: BreakpointObserver,
    public breakpoints: BreakpointService) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('desktop');
          if (this.detailOutlet && !this.isOutletActive) {
            // this.detailOutlet.activateWith(this.route, null);
          }
        } else {
          console.log('mobile');
          if (this.detailOutlet && this.isOutletActive) {
            // this.detailOutlet.deactivate();
          }
        }
      });
  }

  onOutletActivated($event) {
    this.isOutletActive = true;
  }

  onOutletDeactivated($event) {
    this.isOutletActive = false;
  }

}
