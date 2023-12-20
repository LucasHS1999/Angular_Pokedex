import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Pokemon_listComponent } from './pokemon_list/pokemon_list.component';

@NgModule({
  declarations: [	
    AppComponent,
      Pokemon_listComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
