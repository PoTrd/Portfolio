import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  fg: FormGroup;

  constructor() { 
    this.fg = new FormGroup({
      nom : new FormControl('', Validators.required),
      prenom : new FormControl('', Validators.required),
      mail : new FormControl('', [Validators.required, Validators.email]),
      message : new FormControl('')
    });
  }

  ngOnInit() {
  }

}
