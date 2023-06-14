import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroHomepageComponent } from './components/featured/hero-homepage/hero-homepage.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CarCardComponent } from './components/common/car-card/car-card.component';
import { ReactiveFormsModule } from '@angular/forms';


const COMPONENTS = [
  NavbarComponent,
  HeroHomepageComponent,
  FooterComponent,
]

@NgModule({
  declarations: [
    COMPONENTS,
    CarCardComponent,
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
