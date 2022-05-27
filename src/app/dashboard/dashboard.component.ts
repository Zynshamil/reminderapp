import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // DashForm Model
  dashForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern('[a-zA-z@.0-9]*')]],
    date:['',[Validators.required]],
    description:['',[Validators.required,Validators.pattern('[a-zA-z@.0-9]*')]]
  })

  constructor(private router:Router,private fb:FormBuilder,private ds:DataService) { }

  ngOnInit(): void {
  }

  addEvent(){
    var email=this.dashForm.value.email
    var date=this.dashForm.value.date
    var description=this.dashForm.value.description
    if(this.dashForm.valid){

      this.ds.dashboard(email,date,description)
     
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
          }
         },
         (result)=>{
          alert(result.error.message)
         }
         )
         
        }
        else{
          alert("invalid form")
        }
        
          }
   

          logout(){
            localStorage.removeItem("currentMail")
            localStorage.removeItem("currentUser")
            localStorage.removeItem("token")
            this.router.navigateByUrl("")

            alert("Logged out of your account ")
          }
        }
       