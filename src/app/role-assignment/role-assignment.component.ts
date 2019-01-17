import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-role-assignment',
  templateUrl: './role-assignment.component.html',
  styleUrls: ['./role-assignment.component.scss']
})
export class RoleAssignmentComponent implements OnInit {
  regions = [];
  roles = [];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getRegions().subscribe(regions => this.regions = regions);
    this.dataService.getRoles().subscribe(roles => this.roles = roles);
  }



}
