import { AfterViewInit, Directive, ElementRef } from "@angular/core";


@Directive({
    selector:'[cpDeafaultTheme]'
})
export class CPDefaultThemeDirective   implements AfterViewInit {
  //We are creating a simple attribute directive that will change color and font size of a HTML element


  //To change appearance of HTML element in DOM,
  // we need to use ElementRef within custom directive definition. 
  //ElementRef can directly access the DOM. We can use it directly
  // without using directive but that can lead to XSS attacks.
  // It is safer to use ElementRef within directive definition. 
  //Now let us create custom attribute directives.


    constructor(private elRef:ElementRef){

    }
    ngAfterViewInit():void  {
        this.elRef.nativeElement.style.color = 'blue';
        this.elRef.nativeElement.style.fontSize = '20px';
    }
    
}