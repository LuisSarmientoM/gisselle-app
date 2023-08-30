import { Component, OnInit, inject } from '@angular/core';
import { LayoutComponent } from '@components/layout/layout.component';
import Machine from './machine';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { LoadingComponent } from '@components/loading/loading.component';
import { FilterComponent } from '@components/filter/filter.component';
import { RouterLink } from '@angular/router';
import { MachineCardComponent } from './components/card/card.component';
import { UiService } from '@core/services/ui.service';
import { MachinesService } from './machines.service';
import { NgEventBus } from 'ng-event-bus';
@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  standalone: true,
  imports: [
    LayoutComponent,
    NgFor,
    NgIf,
    LoadingComponent,
    FilterComponent,
    RouterLink,
    NgClass,
    MachineCardComponent
  ],
  providers: [MachinesService],
})
export class MachinesComponent implements OnInit {
  private machinesService = inject(MachinesService);
  machines!: Machine[];
  private uiService = inject(UiService);;
  private eventBus = inject(NgEventBus)

  reloading = false;
  ngOnInit() {
    this.uiService.setToolbar([
      {
        type: 'title',
        text: 'Equipos registrados',
      },
    ]);
    this.machines = this.machinesService.getMachines();
    this.getMachines();
  }
  getMachines() {
    this.eventBus.on('machines:update').subscribe(() => {
      this.machines = this.machinesService.getMachines();
    });
  }

  // createNew() {
  //   // this.dialog.open(MachineFormComponent).closed.subscribe((data) => {
  //   //   if (data) {
  //   //     this.machinesService.addMachine(data);
  //   //   }
  //   // });
  // }

  clean() {
    this.machinesService.clean();
  }

  reload() {
    this.reloading = true;
    this.machines = [];
    this.getMachines();
  }
}
