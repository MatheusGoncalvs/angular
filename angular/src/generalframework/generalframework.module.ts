import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TeuNavbarComponent } from './teu-navbar/teu-navbar.component';
import { FrameworkConfigService } from './services/framework-config.service';
import {TopBarComponent} from './top-bar/top-bar.component'
import { StatusBarComponent } from './status-bar/status-bar.component'
import { ScreenService } from './services/screen.service';
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';

@NgModule({
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TeuNavbarComponent,
    TopBarComponent,
    StatusBarComponent,
    MenuComponent,
    MenuItemComponent,
    ScreenLarge,
    ScreenBelowLarge,
    PopupMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    FrameworkConfigService,
    ScreenService,
    MenuService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class GeneralframeworkModule { }
