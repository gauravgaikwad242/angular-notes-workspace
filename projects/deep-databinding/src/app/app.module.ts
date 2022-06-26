import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenderComponent } from './inputDirective/sender/sender.component';
import { ReceiverComponent } from './inputDirective/receiver/receiver.component';
import { FormsModule } from '@angular/forms';
import { InputServerComponent } from './outputDirective/input-server/input-server.component';
import { DisplayServerComponent } from './outputDirective/display-server/display-server.component';
import { LocalReferencesComponent } from './localReferences/local-references/local-references.component';
import { ViewChildComponent } from './localReferences/view-child/view-child.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { EventBindingComponent } from './simpleDataBinding/event-binding/event-binding.component';
@NgModule({
  declarations: [
    AppComponent,
    SenderComponent,
    ReceiverComponent,
    InputServerComponent,
    DisplayServerComponent,
    LocalReferencesComponent,
    ViewChildComponent,
    NgContentComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
