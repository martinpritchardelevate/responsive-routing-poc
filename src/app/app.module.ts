import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent, DetailComponent } from './pages';
import { BreakpointService, MasterDetailService } from './services';
import { MasterDetailComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailComponent,
    MasterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [
    BreakpointService,
    MasterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
