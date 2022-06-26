import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  
  data:string;
  name:string;
  age:number;
   info={
    name:"gaurav",
    age:24,
  }

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.info={
      name:this.name,
      age:this.age
    };
    console.log(this.info);
   
    
  }

}
