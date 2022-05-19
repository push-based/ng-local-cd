import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdEmbeddedViewDemoDirective } from './demo/cd-embedded-view-demo.directive';
import { TemplateVsEmbeddedViewDetachComponent } from './demo/template-vs-embedded-view-detach.component';
import { TemplateVsEmbeddedViewLazyComponent } from './demo/template-vs-embedded-view-lazy.component';
import { TemplateVsEmbeddedViewComponent } from './demo/template-vs-embedded-view.component';
import { UnpatchModule } from '@rx-angular/template/unpatch';
import { DirtyChecksModule } from '../shared/dirty-checks/dirty-checks.module';
import { CdEmbeddedViewPlaygroundDirective } from './playground/cd-embedded-view-playground.directive';
import { TemplateVsEmbeddedViewPlaygroundComponent } from './playground/template-vs-embedded-view-playground.component';

@NgModule({
  declarations: [
    CdEmbeddedViewDemoDirective,
    CdEmbeddedViewPlaygroundDirective,
    TemplateVsEmbeddedViewPlaygroundComponent,
    TemplateVsEmbeddedViewComponent,
    TemplateVsEmbeddedViewLazyComponent,
    TemplateVsEmbeddedViewDetachComponent,
  ],
  imports: [CommonModule, UnpatchModule, DirtyChecksModule],
})
export class ViewVsEmbeddedViewModule {}
