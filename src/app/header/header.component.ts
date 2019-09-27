import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  callCenter:string;

  constructor(private testService: TestService) { }

  ngOnInit() {
   this.callCenter = this.testService.callCenter;
  }

}
