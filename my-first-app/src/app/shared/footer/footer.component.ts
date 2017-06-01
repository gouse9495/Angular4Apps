import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-footer',
  template:`
  <div class="footer">
  <app-nav>
  <li><a href="#scrolltotop">Scroll to top</a></li>
  </app-nav>
  <a href="www.github.com">GITHUB </a> 
  </div>
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
