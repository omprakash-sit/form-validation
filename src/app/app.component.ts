import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  emailPattern = '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[\\s]{0,1}[-()\\s0-9]*$';
  constructor(
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.minLength(5), Validators.maxLength(10)]),
      age: new FormControl('', [Validators.min(18), Validators.max(60)]),
      email: new FormControl('', [Validators.pattern(this.emailPattern)]),
      contact: new FormControl('')
    });
  }
}