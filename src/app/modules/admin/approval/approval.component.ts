import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {

  constructor(private service: SharedService) { }
  public selectedType = 'pendingUsers';

  ngOnInit(): void {
    this.service.activeHeaderTitle = 'Approval Queue';
  }

  changeType(type){
    this.selectedType = type;
  }

}
