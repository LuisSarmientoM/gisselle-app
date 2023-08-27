import { Component, OnInit, inject } from '@angular/core';
import { LayoutComponent } from '@components/layout/layout.component';
import Machine from './machine';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { LoadingComponent } from '@components/loading/loading.component';
import { FilterComponent } from '@components/filter/filter.component';
import { RouterLink } from '@angular/router';
import { MachineCardComponent } from './components/card/card.component';
import { Dialog } from '@angular/cdk/dialog';
// import { MachineFormComponent } from './components/form/form.component';
import { UiService } from '@core/services/ui.service';
import { ToastService } from '@components/toaster/toast.service';
import { ToasterComponent } from '@components/toaster/toaster.component';
import { MachinesService } from './machines.service';
import { NgEventBus } from 'ng-event-bus'
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
    ToasterComponent,
    MachineCardComponent
  ],
  providers: [MachinesService],
})
export class MachinesComponent implements OnInit {
  private machinesService = inject(MachinesService);
  machines!: Machine[];
  private uiService = inject(UiService);;
  private toastService = inject(ToastService);
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
    this.toastService.showToast('Éxito', 'Se recargaron los equipos');
    this.reloading = true;
    this.machines = [];
    this.getMachines();
  }
}
