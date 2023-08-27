import { Component, Input, inject } from '@angular/core';
import Machine from '../../machine';
import { Dialog } from '@angular/cdk/dialog';
// import { MachineFormComponent } from '../form/form.component';
import { MachinesService } from '../../machines.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-machines-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [RouterLink],
})
export class MachineCardComponent {
  @Input() machine!: Machine;
  dialog = inject(Dialog);
  machineService = inject(MachinesService);

  openEditModal() {
    // const edit = this.dialog.open<Machine>(MachineFormComponent, {
    //   data: this.machine,
    // });
    // edit.closed.subscribe((data) => {
    //   if (data) {
    //     this.machineService.editMachine(data);
    //   }
    // });
  }
}
