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

  constructor() // inject parts to maintain embeddedViews
  {}

  ngOnInit(): void {
    // handle subscription to values$
    // create embeddedView on first emission
    // update embeddedView if already created
    // evaluate embeddedViews template
  }

  ngOnDestroy(): void {
    // clear viewcontainer
    this.subscription?.unsubscribe();
  }
}
