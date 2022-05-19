import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateVsEmbeddedViewDetachComponent } from './template-vs-embedded-view/demo/template-vs-embedded-view-detach.component';
import { TemplateVsEmbeddedViewLazyComponent } from './template-vs-embedded-view/demo/template-vs-embedded-view-lazy.component';
import { TemplateVsEmbeddedViewComponent } from './template-vs-embedded-view/demo/template-vs-embedded-view.component';
import { TemplateVsEmbeddedViewPlaygroundComponent } from './template-vs-embedded-view/playground/template-vs-embedded-view-playground.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'template-vs-embedded-view/basic',
  },
  {
    path: 'template-vs-embedded-view/basic',
    component: TemplateVsEmbeddedViewComponent,
  },
  {
    path: 'template-vs-embedded-view/detach',
    component: TemplateVsEmbeddedViewDetachComponent,
  },
  {
    path: 'template-vs-embedded-view/lazy',
    component: TemplateVsEmbeddedViewLazyComponent,
  },
  {
    path: 'template-vs-embedded-view/playground',
    component: TemplateVsEmbeddedViewPlaygroundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
