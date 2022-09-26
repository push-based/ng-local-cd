import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[cdEmbeddedViewCustom]',
})
export class CdEmbeddedViewPlaygroundDirective implements OnInit, OnDestroy {
  // create observable input

  private subscription: Subscription;

  @Input() cdEmbeddedViewCustom: Observable<any>;

  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>
  ) // inject parts to maintain embeddedViews
  {}

  ngOnInit(): void {
    let view: EmbeddedViewRef<any>;
    // view.detach();
    this.cdEmbeddedViewCustom.subscribe(value => {
      if (!view) {
        view = this.viewContainer.createEmbeddedView(
          this.template
        );
        view.detach();
      }
      view.context = {
        $implicit: value
      };
      view.detectChanges();
    });
    // handle subscription to values$
    // create embeddedView on first emission
    // update embeddedView if already created
    // evaluate embeddedViews template
  }

  ngOnDestroy(): void {
    // clear viewcontainer
    this.viewContainer?.clear();
    this.subscription?.unsubscribe();
  }
}
