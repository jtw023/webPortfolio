import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { StoreDataService } from './contacts-page/store-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    NavbarComponent,
    ProjectsPageComponent,
    ContactsPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [StoreDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
