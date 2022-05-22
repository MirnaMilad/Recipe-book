import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import * as fromApp from './store/app.reducer'
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot(
      // {
      // shoppingList : ShoppingListReducer , 
      // auth : AuthReducer}
     fromApp.appReducer ),
     EffectsModule.forRoot([
       AuthEffects
     ])
  ],
  //providers : [LoggingService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }