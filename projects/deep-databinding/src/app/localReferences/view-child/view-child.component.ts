import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

@ViewChild('serverName',{static:true}) nameOfServer: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log(this.nameOfServer.nativeElement.value)
  }

}
