import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventTypes } from '../models/event-types';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styles: [],
})
export class ToastComponent implements OnInit {
  @Output() disposeEvent = new EventEmitter();

  @ViewChild('loader', { static: true })
  loader!: ElementRef;

  @Input()
  type!: EventTypes;

  @Input()
  title!: string;

  @Input()
  message!: string;

  loading = 0;

  interval: any;
  ngOnInit() {
    this.show();
  }

  show() {
    setTimeout(() => {
      this.dispose();
    }, 5000);
    this.interval = setInterval(() => {
      this.loading += 0.08;
      this.loader.nativeElement.style.width = this.loading + '%';
    }, 1);
  }

  dispose() {
    clearInterval(this.interval);
    this.disposeEvent.emit();
  }
}
