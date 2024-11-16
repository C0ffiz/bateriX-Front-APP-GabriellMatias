import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Seu componente principal
import { AppRoutingModule } from './app/app-routing.module';  // Importar o módulo de rotas
import { provideRouter } from '@angular/router';  // Provedor de rotas
import { routes } from './app/app.routes';  // Importar as rotas
import { FormsModule } from '@angular/forms';  // Importar FormsModule para ngModel
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';  // Usar provideHttpClient

// Configuração do aplicativo para incluir roteamento e provideHttpClient
export const appConfig = {
  imports: [
    AppComponent,
    AppRoutingModule,
    FormsModule  // Incluindo FormsModule para usar ngModel
  ],
  providers: [
    provideRouter(routes),  // Fornecendo as rotas diretamente
    provideHttpClient(withInterceptorsFromDi())  // Fornecendo HttpClient com interceptores
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
