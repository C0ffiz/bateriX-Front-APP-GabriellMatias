import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,           // Handles the browser environment and component rendering
    RouterModule.forRoot(routes) // Configures your app's routes
  ],
  exports: [RouterModule]   // Export RouterModule for other modules to use
})
export class AppRoutingModule {}
