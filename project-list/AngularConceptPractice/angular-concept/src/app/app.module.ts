import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListParentComponent } from './todo-list-parent/todo-list-parent.component';
import { TodoListChildComponent } from './todo-list-child/todo-list-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedDataService } from './shared-data.service';
import { TextConverterPipe } from './text-converter.pipe';
import { PracticeConceptComponent } from './practice-concept/practice-concept.component';
import { BackgroundChangeDirective } from './background-change.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { AdminPageComponent } from './admin-page/admin-page.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoListParentComponent,
    TodoListChildComponent,
    TextConverterPipe,
    PracticeConceptComponent,
    BackgroundChangeDirective,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedmoduleModule
  ],
  providers: [SharedDataService,{
     provide:HTTP_INTERCEPTORS,
     useClass: AuthInterceptor,
     multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
