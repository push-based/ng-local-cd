import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';

@Component({
  selector: 'template-vs-embedded-view',
  templateUrl: './template-vs-embedded-view-playground.component.html',
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
export class TemplateVsEmbeddedViewPlaygroundComponent {
  btn1Click$ = new Subject<Event>();
  btn2Click$ = new Subject<Event>();
  value1$ = this.btn1Click$.pipe(
    scan((a) => ++a, 0),
    startWith(0)
  );
  value2$ = this.btn2Click$.pipe(
    scan((a) => ++a, 0)
    // if you want your view to be created immediately, remove the comment from the next line
    // startWith(0)
  );
}
