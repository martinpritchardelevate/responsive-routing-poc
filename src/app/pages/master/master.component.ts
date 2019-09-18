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
    this.masterDetailService.navigateToDetail(['detail'], this.route);
  }

}
