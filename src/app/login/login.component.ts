import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // LofinForm Model
  loginForm = this.fb.group({

  
    email:['',[Validators.required,Validators.pattern('[a-zA-z@.0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
  })

  constructor(private router:Router, private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login() {
    var email = this.loginForm.value.email
    var password = this.loginForm.value.password
    if(this.loginForm.valid){
// call login in dataService-asynchronou

   this.ds.login(email,password)
   .subscribe((result:any)=>{
    if(result){
      localStorage.setItem("currentMail",JSON.stringify(result.currentMail))
      localStorage.setItem("currentUser",JSON.stringify(result.currentUser))
      localStorage.setItem("token",JSON.stringify(result.token))
      alert("login successfull")
      this.router.navigateByUrl("dashboard")
    }
   },
   (result)=>{
     alert(result.error.message)
   }
   )}
 else{
   alert("invalid Form")
 }
}
}