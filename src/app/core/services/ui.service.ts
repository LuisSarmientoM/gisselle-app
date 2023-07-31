import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UiService {
  isCloseSidebar = new BehaviorSubject<boolean>(true);

  public toggleSidebar(): void {
    console.log(this.isCloseSidebar.value);

    this.isCloseSidebar.next(!this.isCloseSidebar.value);
  }

  public getSidebar() {
    return this.isCloseSidebar;
  }
}
