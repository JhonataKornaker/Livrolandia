import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Input() customClass: string = '';

  onClose() {
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent) {
    this.onClose();
  }
}
