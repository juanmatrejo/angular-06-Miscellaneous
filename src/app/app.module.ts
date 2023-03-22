import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING  } from './app.routes';
import { AppComponent } from './app.component';
import { NgStylesComponent } from './components/ng-styles/ng-styles.component';
import { CssComponent } from './components/css/css.component';
import { NgClassesComponent } from './components/ng-classes/ng-classes.component';
import { HighlightsDirective } from './directives/highlights.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/new-user.component';
import { EditUserComponent } from './components/user/edit-user.component';
import { DetailUserComponent } from './components/user/detail-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStylesComponent,
    CssComponent,
    NgClassesComponent,
    HighlightsDirective,
    NgSwitchComponent,
    HomeComponent,
    UserComponent,
    NewUserComponent,
    EditUserComponent,
    DetailUserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
