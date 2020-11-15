import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  public isCollapse: boolean;
  public addTask: boolean;

  constructor(private sharedService: SharedService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sharedService.getSideMenuCollapse()
    .subscribe(res => {
      this.isCollapse = res
    });

    this.route.queryParams.subscribe(res => {
      this.addTask = res.addTask;
      console.log(this.isCollapse)
      console.log(this.addTask);
    });
  }

}
