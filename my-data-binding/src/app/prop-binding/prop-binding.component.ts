import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styleUrls: ['./prop-binding.component.css']
})
export class PropBindingComponent implements OnInit {

age=25;
isRed() {
  return true;

}
  constructor() { }

  ngOnInit() {
  }

}
