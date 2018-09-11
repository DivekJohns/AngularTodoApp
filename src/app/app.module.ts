import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddserviceService } from './addservice.service';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { TasklistComponent } from './tasklist/tasklist.component';
import { SearchPipe } from './search.pipe';
import { CompletePipe } from './complete.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    SearchPipe,
    CompletePipe
   
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase,'angularfs'),
    AngularFirestoreModule,
     FormsModule
  ],
  providers: [AddserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
