import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitForm: FormGroup;
  validMessage: String = "";
  invalidMessage: String = "";

  constructor(private router: Router) {
    this.submitForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
    		Validators.required,
    		Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    	])),
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  async createNewAccount() {
    let that = this;
    if (this.submitForm.valid) {
      console.log(this.submitForm.value);
      this.validMessage = "Loading...";
      this.invalidMessage = "";
      setTimeout(() => {
        that.router.navigate(['/update']);
      }, 2000);
    } else {
      this.validMessage = "";
      this.invalidMessage = "Please check that all fields are complete and correct.";
    }
  }
}
