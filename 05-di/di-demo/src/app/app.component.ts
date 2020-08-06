import { Component, Injector, Inject, ComponentRef, Compiler, ViewChild, ViewContainerRef } from '@angular/core';
import { HelloService } from './services/hello.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      AppComponent: {{helloMessage}} {{stamArray | json}}
    </h1>
    <button (click)="loadStam()">
      load stam component
    </button>
    <div #stamContainer>
    </div>
    <ta-child></ta-child>
  `,
  providers: [
    // {
    //   provide: 'hello',
    //   useValue: 'hello from AppComponent'
    // },
  ]
})
export class AppComponent {
  @ViewChild('stamContainer', {read: ViewContainerRef})
  componentWrapper: ViewContainerRef;

  title = 'di-demo';

  constructor(
    private _compiler: Compiler,
    private _injector: Injector,
    @Inject('hello') public helloMessage: string,
    @Inject('stam') public stamArray: string[],
    private _hello: HelloService) {}

  nowIKnowTheRole() {
    const helloService: HelloService = this._injector.get<HelloService>(HelloService);
    // this._injector.get<string>('hello' as any);
  }

  /**
   * lazy load the module and component
   */
  async loadStam() {
    const { StamModule } = await import('../stam/stam.module');
    const stamModuleFactory = await this._compiler.compileModuleAsync(StamModule);
    const moduleRef = stamModuleFactory.create(this._injector);
    const { StamComponent } = await import('../stam/stam.component');
    const stamComponentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(StamComponent);
    this.componentWrapper.createComponent(stamComponentFactory);
  }
}
