import { Injectable, Inject, InjectionToken } from '@angular/core';

interface HelloConfig {
  name: string;
}

export const HELLO_CONFIGURATION = new InjectionToken<HelloConfig>('configuration for the hello service');

@Injectable({providedIn: 'root'})
export class HelloService {
  message = 'hello world'

  constructor(@Inject(HELLO_CONFIGURATION) config: HelloConfig ) { }

}
