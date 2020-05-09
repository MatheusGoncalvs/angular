import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TeuNavbarComponent } from './teu-navbar/teu-navbar.component';
import { FrameworkConfigService } from './services/framework-config.service';
import {TopBarComponent} from './top-bar/top-bar.component'
import { StatusBarComponent } from './status-bar/status-bar.component'
import { ScreenService } from './services/screen.service';

@NgModule({
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TeuNavbarComponent,
    TopBarComponent,
    StatusBarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    FrameworkConfigService,
    ScreenService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class GeneralframeworkModule { }