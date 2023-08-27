import { Injectable } from '@angular/core';
import { ToastEvent } from './models/toast-event';
import { Observable, Subject } from 'rxjs';
import { EventTypes } from './models/event-types';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastEvents: Observable<ToastEvent>;
  private _toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents = this._toastEvents;
  }

  /**
   * Show toast notification.
   * @param title Toast title
   * @param message Toast message
   * @param type Toast type
   */
  showToast(
    title: string,
    message: string,
    type: EventTypes = EventTypes.Success
  ) {
    this._toastEvents.next({
      message,
      title,
      type,
    });
  }
}
