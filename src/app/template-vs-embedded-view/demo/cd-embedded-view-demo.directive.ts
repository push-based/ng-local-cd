import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import {
  Observable,
  ObservableInput,
  ReplaySubject,
  Subscription,
  Unsubscribable,
} from 'rxjs';
import { distinctUntilChanged, switchAll } from 'rxjs/operators';

@Directive({
  selector: '[cdEmbeddedView]',
})
export class CdEmbeddedViewDemoDirective implements OnInit, OnDestroy {
  @Input('cdEmbeddedViewDetach') detach = false;

  @Input() cdEmbeddedView: Observable<any>;

  private subscription: Unsubscribable = new Subscription();
  private embeddedView: EmbeddedViewRef<any>;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.cdEmbeddedView.subscribe((v) => {
      if (!this.embeddedView) {
        this.createEmbeddedView();
      }
      this.embeddedView.context = {
        $implicit: v,
      };
      this.embeddedView.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.viewContainerRef.clear();
    this.subscription.unsubscribe();
  }

  private createEmbeddedView(): void {
    this.embeddedView = this.viewContainerRef.createEmbeddedView(
      this.templateRef
    );
    if (this.detach) {
      this.embeddedView.detach();
    }
  }
}
