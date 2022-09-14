import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  reactiveform: FormGroup;
  email: string;
   password: string;
   formData: FormGroup;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.reactiveform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

   onSubmit(){
  //   console.log(this.reactiveform);

  //   this.authService.login(this.email, this.password)
  //        .subscribe( data => { 
  //           console.log("Is Login Success: " + data); 
      
  //          if(data) this.router.navigate(['/expenses']); 
  //     });
   }

  

}
