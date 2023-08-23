import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;

  selectedRadioButtonValue: string = 'All';

  @Output() filterRadioButtonSelectionChange: EventEmitter<string> =
    new EventEmitter<string>();

  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionChange.emit(this.selectedRadioButtonValue);
  }
}
