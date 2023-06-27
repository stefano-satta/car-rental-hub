import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroHomepageComponent } from './components/featured/hero-homepage/hero-homepage.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CarCardComponent } from './components/common/car-card/car-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './components/common/icon/icon.component';
import { CarDetailsModalComponent } from './components/common/modals/car-details-modal/car-details-modal.component';


const COMPONENTS = [
  NavbarComponent,
  HeroHomepageComponent,
  FooterComponent,
  CarCardComponent,
  IconComponent,
]

@NgModule({
  declarations: [
    COMPONENTS,
    CarDetailsModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    COMPONENTS,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  static forRoot() {
      return {
          ngModule: SharedModule,
          providers: []
      };
  }
}
