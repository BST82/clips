import { Component, Input, OnInit, ElementRef,OnDestroy } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],

})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalID = ''

  constructor(
    public modal: ModalService, 
    public el: ElementRef
  ) { 
    
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy() {
    try {
      if (this.el && this.el.nativeElement && document.body.contains(this.el.nativeElement)) {
        document.body.removeChild(this.el.nativeElement);
      } else {
        console.warn('Element not found in the document body during destroy phase.');
      }
    } catch (error) {
      console.error('Error occurred during component destruction:', error);
    }
  }

  closeModal() {
    this.modal.toggleModal(this.modalID)
  }

}