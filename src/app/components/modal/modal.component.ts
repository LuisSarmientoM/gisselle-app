import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ButtonCloseComponent } from '@components/buttons/close/close.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
  imports: [ButtonCloseComponent],
})
export class ModalComponent implements OnInit {
  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA)
    public data: { message: string; icon?: string }
  ) { }

  ngOnInit(): void {
    this;
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
