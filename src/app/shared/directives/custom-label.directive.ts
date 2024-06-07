import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomLabel]'
})
export class CustomLabelDirective  implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>;
  private _color:string = 'red';

  @Input() set color(value:string){
      console.log({color: value})
      this._color = value;
      this.setStyle();
  }


  constructor(
    private el: ElementRef<HTMLElement>
  ) { 
    console.log(el)
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log('directive-NgOnInt');
    this.setStyle();

  }


  setStyle():void{
    if( !this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

}