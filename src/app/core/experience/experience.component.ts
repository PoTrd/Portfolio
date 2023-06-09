import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  showImage = false;

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this.showImage = !this.showImage;
  }

}
