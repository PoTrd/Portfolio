import { Component, OnInit, ElementRef } from '@angular/core';
import { SharedScrollServiceService } from '../../services/shared-scroll-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private sharedScrollService: SharedScrollServiceService,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.sharedScrollService.scrollToSectionSource$.subscribe(
      sectionId => {
        const section = this.elementRef.nativeElement.querySelector('#' + sectionId);
        if(section) {
          section.scrollIntoView({behavior: 'smooth'});
        }
      }
    )
  }

}
