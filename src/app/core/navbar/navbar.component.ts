import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'fa-edit',
      },
      {
        label: 'Logout',
        icon: 'fa-edit',
      }
    ];

  }
}
