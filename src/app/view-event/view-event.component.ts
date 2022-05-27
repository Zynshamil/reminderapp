import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  viewevent:any
  email:any


  
  constructor(private ds:DataService) { 

  this.email= JSON.parse(localStorage.getItem("currentMail")||'')
    this.viewevent=this.ds.viewevent(this.email)
    .subscribe((result:any)=>{
      if(result){
        this.viewevent=result.event
        console.log(result)    
      }
    },
    (result)=>{
      alert(result.error.message)
    })
  }

  ngOnInit(): void {
  }

}
