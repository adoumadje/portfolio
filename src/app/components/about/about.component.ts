import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
 
  constructor() { }

  downloadCV() {
    const url = '/assets/My-CV/CV_Caleb_ADOUMADJE_MADJINGARAL.pdf'
    const link = document.createElement('a')
    link.setAttribute('target', '_blank')
    link.setAttribute('href', url)
    link.setAttribute('download', 'CV_Caleb_ADOUMADJE_MADJINGARAL.pdf')
    document.body.appendChild(link)
    link.click()
    link.remove()
  }
}
