import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";

@NgModule(
    {
        declarations:[AppComponent],
        bootstrap:[AppComponent],
        imports:[BrowserModule,UserComponent, HeaderComponent,TasksComponent,RouterOutlet],
    }
)
export class AppModule{
    
}