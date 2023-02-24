import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDndfile]'
})
export class DndfileDirective {

  @Output() readFile: EventEmitter<any>;
  constructor() {
    this.readFile = new EventEmitter();
  }

  @HostListener('dragover', ['$event']) public dragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) public dragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event']) public drop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.dataTransfer, 'hgh');

    this.readFile.emit(event.dataTransfer);
  }
}
