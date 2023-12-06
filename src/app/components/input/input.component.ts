import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @ViewChild('input') input?: ElementRef;

  isDirty = false;
  isValid = true;

  constructor(){
  }

  valueChange(){
    this.isDirty = true;
    this.isValid = this.input?.nativeElement.value !== '';
  }
}
