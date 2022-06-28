import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiModule } from './core/api/v1';
import { Configuration } from './core/api/v1';
import { ConfigurationParameters } from './core/api/v1';
import { environment } from 'src/environments/environment';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.basePath
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
