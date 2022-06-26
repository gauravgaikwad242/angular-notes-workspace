import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  studentName:string;
  receivedData:string;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log("onclick triggered")
    
  }
}
