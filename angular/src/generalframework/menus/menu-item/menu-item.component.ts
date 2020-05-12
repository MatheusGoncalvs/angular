import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/generalframework/services/menu.service';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem

  constructor() { }

  ngOnInit(): void {
  }

}
