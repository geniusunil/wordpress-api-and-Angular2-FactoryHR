import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { SingleComponent } from './single/single.component';
import { RouterModule, Routes } from '@angular/router';
import { PostsService } from './services/posts.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: ':slug',
    component: SingleComponent
  },
  { path: '',
    component: CategoryComponent,
    pathMatch: 'full'
  }
 ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
