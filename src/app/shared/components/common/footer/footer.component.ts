import { Component } from '@angular/core';
import { baseEnvironment } from 'src/environments/base-environment';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  mail: string = baseEnvironment.personalInfo.mail;
  siteUrl: string = baseEnvironment.personalInfo.siteUrl;

}
