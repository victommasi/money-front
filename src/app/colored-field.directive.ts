import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appColoredField]',
  exportAs: 'appColoredField'
})
export class ColoredFieldDirective {

  @Input('appColoredField') color;

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('focus') onFocus() {
    this.backgroundColor = this.color;
  }

  @HostListener('blur') leaveFocus() {
    this.backgroundColor = this.color;
  }
}
