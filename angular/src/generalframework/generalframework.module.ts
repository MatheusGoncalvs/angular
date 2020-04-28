import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TeuNavbarComponent } from './teu-navbar/teu-navbar.component';

@NgModule({
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TeuNavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class GeneralframeworkModule { }
