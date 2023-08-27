import { Dialog } from '@angular/cdk/dialog';
import { Injectable, inject } from '@angular/core';
import { ModalComponent } from '@components/modal/modal.component';
import { BehaviorSubject } from 'rxjs';

interface ToolbarConfig {
  type: 'title' | 'button' | 'search';
  text: string;
  icon?: string;
  action?: () => void;
  // showBackButton: boolean;
}
@Injectable()
export class UiService {
  private dialog = inject(Dialog);
  isCloseSidebar = new BehaviorSubject<boolean>(true);
  toolbarConfig: ToolbarConfig[] = [];
  public toggleSidebar(): void {
    this.isCloseSidebar.next(!this.isCloseSidebar.value);
  }

  public getSidebar() {
    return this.isCloseSidebar;
  }

  public setToolbar(config: ToolbarConfig[]) {
    this.toolbarConfig = config;
  }

  public openModal(message?: string) {
    this.dialog.open(ModalComponent, {
      data: {
        message,
      }
    })
  }
}
