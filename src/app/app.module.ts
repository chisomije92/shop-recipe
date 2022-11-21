import { RecipeEffects } from './recipe/store/recipe.effects';
import { reducers } from './store-root/index';
import { CoreModules } from './core.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipeModule } from './recipe/recipe.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecipeModule,
    ShoppingListModule,
    AuthModule,
    CoreModules,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, RecipeEffects]),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
