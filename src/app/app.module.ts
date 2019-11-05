import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ChoristesSpaceComponent } from './choristes-space/choristes-space.component';
import { AuthGuardService } from "./services/auth-guard.service";
import { ChoraleComponent } from './chorale/chorale.component';
import { ChansonsdavrilComponent } from './chansonsdavril/chansonsdavril.component';




const routes:Routes = [
  {path: 'choristes_space', canActivate:[AuthGuardService], component: ChoristesSpaceComponent},
  {path: 'chorale', component: ChoraleComponent},
  {path: 'chansonsdavril', component: ChansonsdavrilComponent},
  {path: '', component:FrontpageComponent},
  {path: '**', redirectTo: 'frontpage', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrontpageComponent,
    ChoristesSpaceComponent,
    ChoraleComponent,
    ChansonsdavrilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
