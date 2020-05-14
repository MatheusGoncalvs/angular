import { Component, OnInit, Input } from '@angular/core';
import { MenuService, MenuItem } from 'src/generalframework/services/menu.service';

@Component({
  selector: 'fw-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  @Input() menu: Array<MenuItem>;

  ngOnInit(): void {
  }

}
