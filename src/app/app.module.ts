import { APP_INITIALIZER, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './components/layout/layout.component';
import { CoreModule } from './core/core.module';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  provideFirestore,
  persistentLocalCache,
  initializeFirestore,
} from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { ServiceWorkerModule } from '@angular/service-worker';
import { LoadingComponent } from '@components/loading/loading.component';
import { NgClass } from '@angular/common';
// import { ToasterComponent } from '@components/toaster/toaster.component';
import { AppService } from './app.service';
import { NgEventBus } from 'ng-event-bus';
import { InputErrorComponent } from '@components/input-error/input-error.component';

function initializer(appService: AppService): () => Promise<any> {
  return () => appService.load();
}
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    NgClass,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    LayoutComponent,
    LoadingComponent,
    InputErrorComponent,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => {
      const firestore = initializeFirestore(getApp(), {
        localCache: persistentLocalCache(),
        experimentalForceLongPolling: true,
        ignoreUndefinedProperties: true,
      });

      return firestore;
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    AppService,
    NgEventBus,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [AppService],
      multi: true,
    }
  ],
})
export class AppModule { }
