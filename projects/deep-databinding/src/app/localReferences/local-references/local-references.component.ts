import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-references',
  templateUrl: './local-references.component.html',
  styleUrls: ['./local-references.component.css']
})
export class LocalReferencesComponent implements OnInit {

  myNameIs:string;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(name:HTMLInputElement){
      console.log(name.value);
      this.myNameIs=name.value;
  }

}
