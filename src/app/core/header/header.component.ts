import { Component, OnInit } from '@angular/core';
import { SharedScrollServiceService } from '../../services/shared-scroll-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private sharedScrollService: SharedScrollServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  scrollToSection(sectionId: string) {
    this.sharedScrollService.scrollToSection(sectionId)
  }

  goToContact() {
    this.router.navigate(['/contact'])
  }

  goToHome() {
    this.router.navigate(['/'])
  }

  download(fichier: string) {
    window.open(`assets/images/${fichier}`, '_blank');
  }

}
