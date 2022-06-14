import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputMayus]'
})
export class InputMayusDirective {

  constructor(private _el: ElementRef) { }
  @HostListener('input', ['$event']) onInputChange(evt) {

    if (evt.which === 8 || evt.which === 0) {
        return true;
    }

    const regex = new RegExp("[A-Z]");
    var key = String.fromCharCode(!evt.charCode ? evt.which : evt.charCode);
    console.log(regex.test(key))
    if (!regex.test(key)) {
        evt.preventDefault();
        return false;
    }
    return true;
  }

}
