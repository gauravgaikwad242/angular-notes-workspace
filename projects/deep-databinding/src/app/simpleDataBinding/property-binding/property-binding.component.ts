import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  buttonStatus:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log(this.buttonStatus)
    if(this.buttonStatus==true){
      this.buttonStatus=false;
    }
    else if(this.buttonStatus==false){
      this.buttonStatus=true;
    }
  }

}
