import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  
  @Input() info={
    name:"",
    age:0,
    
  }
  constructor() {
    
   }

  ngOnInit(): void {
  }
 

}
