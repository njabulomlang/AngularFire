import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{RouterModule, Routes} from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    ViewComponent,
    ProfileComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:SignInComponent},
      {path:'sign',component:SignInComponent},
      {path:'home',component:HomeComponent},
     { path:"view/:key", component:ViewComponent},
     { path:"profile", component:ProfileComponent},
     { path:"details", component:DetailsComponent}
  ])],
  providers: [],
  bootstrap: [AppComponent]

})


export class AppModule { }
