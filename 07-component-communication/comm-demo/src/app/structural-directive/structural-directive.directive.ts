import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngTemplateOutlet]'
})
export class NameDirective {
  constructor(private template: TemplateRef<any>, private container: ViewContainerRef) { }
}
