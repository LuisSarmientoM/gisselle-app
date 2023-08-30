import {
  Component, Inject,
  OnInit
} from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
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
