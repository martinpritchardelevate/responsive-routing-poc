import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterDetailService } from '../../services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  constructor(
    public route: ActivatedRoute,
    public masterDetailService: MasterDetailService) { }

  public navigateBack() {
    // Use the `masterDetailService` rather than the
    // router to 'Go Back'...
    this.masterDetailService.navigateBack(this.route);
  }

}
