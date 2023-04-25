import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {


  private initialColor: string = "gray";
  private defaultColor: string = "green";
  private defaultHeight: number = 180;

  constructor(private elementRef: ElementRef) {
    /* 
    this.setHeight(180);
    this.setBorder('transparent');
 */
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input('pkmnBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.elementRef.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.elementRef.nativeElement.style.border = `solid 4px ${color}`;
  }

}
