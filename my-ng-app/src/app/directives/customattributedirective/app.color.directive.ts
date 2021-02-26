import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

// since the attribute directive is used for Property Binding
// the selector uses syntax of Property Binding

@Directive({
   selector: '[setColor]'
})
export class ColorDirective {
  // define a property decorated with @Input decorator
  // this property will be mapped with Selector
  // so that when the selector is applied on HTML element
  // the value bind with the selector will be directly assigned
  // to the property
  @Input('setColor')setColor:string;
  @Input() defaultColor:string;

  // these objects will be resolved by browser module
  constructor(private element: ElementRef, private renderer:Renderer2){
    this.setColor ='';
    this.defaultColor = '';
  }

  // method with logic for custom diretive
  private applyColor(color:string):void {
      // set the backgroundColor of the element and render it in browser
      this.renderer.setStyle(this.element.nativeElement, "backgroundColor", color);
  }

  // event methods to activate / deactivate custom directive

  // the method will be called when mouse is entered on the HTML element
  // on which the directive is applied
  @HostListener('mouseenter')
  onmouseenter():void{
    this.applyColor(this.setColor || this.defaultColor);
  }

   // the method will be called when mouse is left from the HTML element
  // on which the directive is applied
  @HostListener('mouseleave')
  onmouseleave():void{
    this.applyColor('');
  }
}
