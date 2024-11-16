import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AuthService } from '../../core/services/auth.service';  // Import AuthService
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],  // Declare LoginComponent
  imports: [CommonModule, FormsModule, HttpClientModule],  // Add HttpClientModule
  providers: [AuthService],
})
export class AuthModule {}
