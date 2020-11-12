import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  public isCollapse: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.getSideMenuCollapse()
    .subscribe(res => this.isCollapse = res);
  }

}
