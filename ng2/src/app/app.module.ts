import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {routing} from './app.routes';
import {ChangeDetectComponent} from './change-detect/change-detect.component';
import {BindingComponent} from './binding/binding';
import {EventsComponent} from './events/events';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    ChangeDetectComponent,
    BindingComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}