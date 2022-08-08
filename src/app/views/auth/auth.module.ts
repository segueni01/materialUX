import { routes } from './auth.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { SessionComponent } from './components/login/session/session.component';
import { ContentSessionComponent } from './components/login/content-session/content-session.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    LoginComponent,
    SessionComponent,
    ContentSessionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FlexLayoutModule
  ]
})
export class AuthModule { }
