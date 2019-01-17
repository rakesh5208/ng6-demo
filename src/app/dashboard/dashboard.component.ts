import { Component, OnInit } from '@angular/core';
import { Test } from '../decorators/test-decorator';
interface DashboardItem {
  label: string;
  path: string;
  icon?: string;
  bg?: string;
}
// cc8549 4982cc

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Test(true)
  items: DashboardItem[] = [
    { label: 'User Management', path: '/users', icon: "fa fa-users",bg: "#CC8549"},
    { label: 'Account Settings', path: '/settings', icon: "fa fa-gears",bg:"#4982CC" }
  ];

  constructor() { }

  ngOnInit() {
  }

  public logged(){
    console.log('logging');
  }


}
