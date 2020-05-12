import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'fw-teu-navbar',
  templateUrl: './teu-navbar.component.html',
  styleUrls: ['./teu-navbar.component.css']
})
export class TeuNavbarComponent implements OnInit {

  constructor(public screenService : ScreenService, public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
