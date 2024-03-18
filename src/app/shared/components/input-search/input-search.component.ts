import {Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'input-search',
  templateUrl: './input-search.component.html',
  styles: ``
})
export class InputSearchComponent {

  @Input()

 @Output()

  public onValue = new EventEmitter<string>();

  emitValue (value:string):void {
    this.onValue.emit(value);
  }


   public placeholder: string = '';
}
