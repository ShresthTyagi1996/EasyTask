import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//^^^ The BrowserModule is a module that is provided by angular team that in the end provides a collection of things that are needed by every angular app in order to run correctly.

import { AppComponent } from './app.component';
import { HeaderComponent } from './Development-using-udemy/header.component';
import { UserComponent } from './Development-using-udemy/user/user.component';
import { SharedModule } from './Development-using-udemy/shared/shared.module';
import { TasksModule } from './Development-using-udemy/tasks/tasks.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule],
})

export class AppModule { }