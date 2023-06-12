import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const COMPONENTS = [
  HomepageComponent,
  PagesComponent
]

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    PagesRoutingModule,
  ],
  exports: [
    COMPONENTS
  ]
})
export class PagesModule { }
