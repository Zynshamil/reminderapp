import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   // registerForm Model
   registerForm = this.fb.group({

    email:['',[Validators.required,Validators.pattern('[a-zA-z@.0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
  })
  

  constructor(private router:Router, private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register() {

    var email = this.registerForm.value.email
    var uname = this.registerForm.value.uname
    var password = this.registerForm.value.password

    if(this.registerForm.valid){
    // asynchronous
      this.ds.register(email,uname,password)
      .subscribe((result:any)=>{
        if (result) {
          alert("successfully registered !!")
          this.router.navigateByUrl('')
        }
      },
      (result)=>{
        alert(result.error.message)
      })
    }
     else {
        alert("Account already exist...please Log In")
      }
    }
  }
    


