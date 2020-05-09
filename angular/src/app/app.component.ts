import { Component } from '@angular/core';

import {FrameworkConfigService, FrameworkConfigSettings} from '../generalframework/services/framework-config.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private frameworkConfigService: FrameworkConfigService ) {
    let config:FrameworkConfigSettings = {
      socialIcons: [
        {imageFile: './assets/images/social-facebook.png', alt: 'Facebook', link: 'www.facebook.com'},
        {imageFile: './assets/images/social-google.png', alt: 'Google', link: 'www.google.com'}
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };
    frameworkConfigService.configure(config);
  }
}
