import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedScrollServiceService {

private scrollToSectionSource = new Subject<string>();
scrollToSectionSource$ = this.scrollToSectionSource.asObservable();

  scrollToSection(sectionId: string) : void {
    this.scrollToSectionSource.next(sectionId);
  }
}
