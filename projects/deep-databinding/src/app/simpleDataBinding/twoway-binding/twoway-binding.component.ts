import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent implements OnInit {

  data:string="Infosys";
  newData:string;

  projectName:string;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.newData=this.data
    console.log(this.newData)
  }
  projectNameFunction(event:Event){
    this.projectName=(<HTMLInputElement>event.target).value
  }

}
