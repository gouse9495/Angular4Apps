import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  templateUrl: './att-directive.component.html',
  styleUrls: ['./att-directive.component.css']
})
export class AttDirectiveComponent implements OnInit {


isauth=false;

  constructor() { }


isError(){
  return true;
} 

  ngOnInit() {
  }

}
