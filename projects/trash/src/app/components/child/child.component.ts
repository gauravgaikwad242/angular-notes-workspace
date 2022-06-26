import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() nameOfStudent:string;
  @Output() feedbackData= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  clickChild(){
    const emited:string="gaurav"
    this.feedbackData.emit(emited)

  }

}
