import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`
  <p class="footer"> Copyright
  <a href="www.github.com">GITHUB </a>
  </p>
  `,
   styles:[
    `.footer{
      color:red;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
