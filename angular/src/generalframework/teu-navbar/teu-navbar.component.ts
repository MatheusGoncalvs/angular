import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';

@Component({
  selector: 'fw-teu-navbar',
  templateUrl: './teu-navbar.component.html',
  styleUrls: ['./teu-navbar.component.css']
})
export class TeuNavbarComponent implements OnInit {

  constructor(public screenService : ScreenService) { }

  ngOnInit(): void {
  }

}
