import { Directive , ElementRef,  Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {


  constructor(private elementRef:ElementRef, public renderer: Renderer2) { 
    console.log(elementRef);
      //This is Through Javascript
       //  console.log(elementRef.nativeElement);
        // elementRef.nativeElement.style.backgroundColor="Red";
       //elementRef.nativeElement.style.height="100px";
      // elementRef.nativeElement.style.margin="50px";

    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','Red')
    this.renderer.setStyle(this.elementRef.nativeElement,'height','200px')

    //let's add few more functionality inside - let's add powered by message
    //let buttonElement = this.renderer.createElement(this.elementRef.nativeElement, 'span');
    //this.renderer.createText(buttonElement, 'Powered by colorize Directive');
    //this.renderer.setElementProperty(buttonElement, 'style', 'float:right; font-size:10px; color: white;');

      let buttonElement = this.renderer.createElement('span');
      this.renderer.setProperty(buttonElement,'innerText','Powered By MyColoriser')
      this.renderer.setProperty(buttonElement,'style','float:right;font-size:10px;')
      this.renderer.appendChild(this.elementRef.nativeElement,buttonElement)
    
    

  }

  @HostListener('mouseover',['$event']) changeColor(event: Event){
        this.renderer.setStyle(this.elementRef.nativeElement,'background-color','Blue')
        console.log(event.target);
  
  }
  
  @HostListener('mouseleave') resetColor(){
        this.renderer.setStyle(this.elementRef.nativeElement,'background-color','Red')
        console.log("Redo HostListener");
  
  }

   @HostListener('click') onclick(){
        this.renderer.setStyle(this.elementRef.nativeElement,'background-color','Green')
        console.log("clicked HostListener");
  
  }


}
