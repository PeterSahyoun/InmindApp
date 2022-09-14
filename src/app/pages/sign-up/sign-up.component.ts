import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  reactiveform: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.reactiveform = new FormGroup({
      fName: new FormControl(null, Validators.required),
      lName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      select: new FormControl('User', Validators.required)
    });
  }

  onSubmit(){
    console.log(this.reactiveform);
  }

}
