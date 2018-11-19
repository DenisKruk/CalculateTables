import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableXComponent } from './tableX/tableX.component';
import { TableYComponent } from './tableY/tableY.component';
import {ActionComponent} from './action/action.component';
import {ResultComponent} from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    TableXComponent,
    TableYComponent,
    ActionComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
