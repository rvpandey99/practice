import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { BeautyComponent } from './categories/beauty/beauty.component';
import { FashionComponent } from './categories/fashion/fashion.component';
import { LifeComponent } from './categories/life/life.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateBlogComponent } from './admin/create-blog/create-blog.component';
import { SelectedBlogComponent } from './selected-blog/selected-blog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    DashbordComponent,
    BeautyComponent,
    FashionComponent,
    LifeComponent,
    SidebarComponent,
    CreateBlogComponent,
    SelectedBlogComponent,
    LoginComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'beauty', component: BeautyComponent},
      {path: 'fashion', component: FashionComponent},
      {path: 'life', component: LifeComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin', component: DashbordComponent, canActivate: [AuthGuardService]},
      {path: 'admin/create', component: CreateBlogComponent}
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
