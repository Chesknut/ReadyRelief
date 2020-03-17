import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  submitForm: FormGroup;

  constructor(private router: Router) {
    this.submitForm = new FormGroup({
      disaster: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    (<any>$(document.body)).append(this.submitForm);
  }
}
