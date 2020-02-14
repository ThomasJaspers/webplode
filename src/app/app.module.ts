import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerComponent } from './player/player.component';
import { FieldComponent } from './field/field.component';
import { ResultviewComponent } from './resultview/resultview.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayerComponent,
    FieldComponent,
    ResultviewComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
