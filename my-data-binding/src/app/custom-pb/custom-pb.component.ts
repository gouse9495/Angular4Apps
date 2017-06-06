import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-pb',
  templateUrl: './custom-pb.component.html',
  styleUrls: ['./custom-pb.component.css']
})
export class CustomPbComponent implements OnInit {

  @Input() myAge=25; //@Input is whoever the selector is using will rewrite in view
  constructor() { }

  ngOnInit() {
  }

}
