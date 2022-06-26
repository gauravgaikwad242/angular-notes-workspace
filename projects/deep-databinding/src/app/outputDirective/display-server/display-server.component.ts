import { Component, OnInit } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-display-server',
  templateUrl: './display-server.component.html',
  styleUrls: ['./display-server.component.css']
})
export class DisplayServerComponent implements OnInit {

   displayServer:Server; 
   servers:Server[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  saveServer(serverData:Server){
    console.log("in saveServer")
      console.log(serverData)
      this.displayServer={
        sName:serverData.sName,
        sContent:serverData.sContent,
      }
      console.log(this.displayServer)
      this.servers.push(this.displayServer)
      console.table(this.servers)
  }
}
