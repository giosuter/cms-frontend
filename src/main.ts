import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // ✅ Import HttpClient provider
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Ensure correct import

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient() // ✅ Fix: Add this line to provide HttpClient
  ],
}).catch((err) => console.error(err));