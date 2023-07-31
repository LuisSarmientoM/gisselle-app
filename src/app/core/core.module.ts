import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';
import { UiService } from './services/ui.service';

@NgModule({
  declarations: [],
  imports: [DialogModule],
  providers: [UiService],
  exports: [DialogModule],
})
export class CoreModule {}
