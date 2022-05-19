import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewVsEmbeddedViewModule } from './template-vs-embedded-view/view-vs-embedded-view.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViewVsEmbeddedViewModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
