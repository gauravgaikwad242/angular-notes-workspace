import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  cityName:string;
  constructor() { }

  ngOnInit(): void {
  }
  addCityName(event:Event){
    console.log((<HTMLInputElement>event.target).value);
    this.cityName= (<HTMLInputElement>event.target).value;
  }
 
}
