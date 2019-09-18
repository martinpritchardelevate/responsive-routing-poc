import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterDetailService } from '../../services';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent {

  constructor(
    public route: ActivatedRoute,
    public masterDetailService: MasterDetailService) { }

  public navigateToDetail() {
    // Use the `masterDetailService` rather than the
    // router to navigate to child routes...
    this.masterDetailService.navigateToDetail(['detail'], this.route);
  }

}
