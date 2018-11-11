import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'beauty', component: BeautyComponent},
      {path: 'fashion', component: FashionComponent},
      {path: 'life', component: LifeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin', component: DashbordComponent},
      {path: 'admin/create', component: CreateBlogComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
