//built in modules
import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FlexLayoutModule }       from "@angular/flex-layout";
import {MatToolbarModule}         from '@angular/material/toolbar';
import {MatListModule}            from "@angular/material/list";
import {MatGridListModule}        from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';

import 'hammerjs';
// services
import { DishService } from "./services/dish.service";
import { PromotionService } from "./services/promotion.service";
import { LeaderService } from "./services/leader.service";
// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
// routes
import { AppRoutingModule } from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService
  ],
  entryComponents:[
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
