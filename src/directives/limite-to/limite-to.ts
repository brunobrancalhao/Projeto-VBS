import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[limit-to]'
})
export class LimiteToDirective {

  @Input('limit-to') limitTo;

  constructor() {

  }
  @HostListener('keypress', ['$event'])
  onkeypress(ev) {
    const limit = +this.limitTo;
    if (ev.target.value.length === limit) {
      ev.preventDefault();
    }
  }
}
