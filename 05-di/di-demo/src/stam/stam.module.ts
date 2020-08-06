import { NgModule, NgModuleRef, ModuleWithProviders } from '@angular/core';
import { StamComponent } from './stam.component';
import { StamService } from './stam.service';
import { RouterModule } from '@angular/router';

interface StamConfig {
  url: string;
}

@NgModule({
  declarations: [StamComponent],
  imports: [],
  exports: [],
  providers: [
    {
      provide: 'hello', // dont do this use injection token
      useValue: 'hello from StamModule'
    },
    StamService
  ],
  // entryComponents: [StamComponent]
})
export class StamModule {
  static forRoot(config: StamConfig): ModuleWithProviders<any> {
    return {
      ngModule: StamModule,
      providers: []
    }
  }
}
