import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTodoComponent } from './MyComponents/input-todo/input-todo.component';
import { DisplayTodoComponent } from './MyComponents/display-todo/display-todo.component';
import { ServiceTodoComponent } from './MyComponets/service-todo/service-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTodoComponent,
    DisplayTodoComponent,
    ServiceTodoComponent
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
