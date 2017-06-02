import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectTitle = 'My DataBinding Project!';
  myName ="Gouse";
  age=30;

  contactDetails = [
    9493248668,156267
  ]

ageLater(){
  return this.age + 40;
}
 
}
