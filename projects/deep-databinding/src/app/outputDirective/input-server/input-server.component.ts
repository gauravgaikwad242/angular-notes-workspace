import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-input-server',
  templateUrl: './input-server.component.html',
  styleUrls: ['./input-server.component.css']
})
export class InputServerComponent implements OnInit {
  serverName:string;
  serverContent:string;
  @Output() emitData=new EventEmitter<Server> ();
  constructor() { }

  ngOnInit(): void {
  }
 
  onClick(){
    console.log("input component")
    console.log(this.serverContent)
    console.log(this.serverName)
    const data:Server={
      sName:this.serverName,
      sContent:this.serverContent,
    };
    console.log(data);
    this.emitData.emit(data);
   
  }
}
