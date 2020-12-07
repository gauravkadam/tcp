import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isCollapse: boolean;
  public title: string;

  constructor(private route: ActivatedRoute, private service: SharedService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(res => {
      this.isCollapse = false;
     if(!location.pathname.match('dashboard')){
       this.isCollapse = true;
     }
    });
    this.title = this.service.activeHeaderTitle;
  }

  

}
