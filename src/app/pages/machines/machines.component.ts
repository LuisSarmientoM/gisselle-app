import { Component, OnInit, inject } from '@angular/core';
import { MachinesService } from './machines.service';
import { LayoutComponent } from '@components/layout/layout.component';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  standalone: true,
  providers: [MachinesService],
  imports: [LayoutComponent],
})
export class MachinesComponent implements OnInit {
  private machinesService = inject(MachinesService);

  ngOnInit() {
    this.machinesService.getMachines().subscribe((machines) => {
      console.log(machines);
    });
  }
}
