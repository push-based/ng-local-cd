import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'template-vs-embedded-view-lazy',
  template: `
    <div class="container">
      <h2>
        Component Template vs Embedded View
        <small>Lazy</small>
      </h2>
      <div>
        Parent component dirty checks:
        <dirty-check-rounded></dirty-check-rounded>
      </div>
      <hr />
      <div class="row" style="margin-bottom: 1rem;">
        <div class="col-6">
          <button (click)="btn1Click$.next($event)">
            update asyncPipe value
          </button>
        </div>
        <div class="col-6">
          <button [unpatch] (click)="btn2Click$.next($event)">
            update embeddedValue
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="view">
            <div><strong>Async Pipe</strong></div>
            <div>asyncValue: {{ value1$ | async }}</div>
            <div>Dirty checks: <dirty-check-rounded></dirty-check-rounded></div>
          </div>
        </div>

        <div class="col-6">
          <div class="view embedded">
            <div><strong>EmbeddedViewRef *cdEmbeddedView</strong></div>
            <ng-container *cdEmbeddedView="value2$; let value">
              <div>embeddedValue: {{ value }}</div>
              <div>
                Dirty checks: <dirty-check-rounded></dirty-check-rounded>
              </div>
            </ng-container>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .container {
        border: 2px solid green;
        padding: 2rem;
      }
      .view {
        border: 3px solid green;
        padding: 1rem;
        height: 100%;
      }
      .embedded {
        border-style: dotted;
      }
    `,
  ],
})
export class TemplateVsEmbeddedViewLazyComponent {
  btn1Click$ = new Subject<Event>();
  btn2Click$ = new Subject<Event>();
  staticValue = 0;
  value1$ = this.btn1Click$.pipe(scan((a) => ++a, 0));
  value2$ = this.btn2Click$.pipe(scan((a) => ++a, 0));
}
