import { Directive, AfterContentInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[autoFocus]'
})
export class AutofocusDirective implements AfterContentInit {


  public constructor(private el: ElementRef) {

  }

  public ngAfterContentInit() {
    this.el.nativeElement.focus();

  }

}
