import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  submitForm: FormGroup;
  validMessage: String = "";
  invalidMessage: String = "";

  constructor(private router: Router) {
    this.submitForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    (<any>$(".dropdown-menu a")).click(function(){
      $(".btn:first-child").html($(this).text()+' <span class="caret"></span>');
    });
  }
}
