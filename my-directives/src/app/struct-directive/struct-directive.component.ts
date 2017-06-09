import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-directive',
  templateUrl: './struct-directive.component.html',
  styleUrls: ['./struct-directive.component.css']
})
export class StructDirectiveComponent implements OnInit {

  isAuth=false;
  age=10;
  navMenus = ['Home','Products','Services','About','Contact'];

  constructor() { }

  onLogin(){
    this.isAuth=true;
    this.age=20;
  }

  ngOnInit() {
  }

}
