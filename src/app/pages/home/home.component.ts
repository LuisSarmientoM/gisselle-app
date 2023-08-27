import { Component, OnInit, inject } from '@angular/core';
import { UiService } from '@core/services/ui.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  private uiService = inject(UiService);;
  private appService = inject(AppService);;

  ngOnInit(): void {
    this.uiService.setToolbar([
      {
        type: 'title',
        text: 'Inicio',
      },
    ]);

    this.getMachines()
  }

  getMachines() {
    this.appService.load()
  }
}