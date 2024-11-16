import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service'; // Import AuthService
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule], // Add RouterModule
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginMessage: string = ''; // Add loginMessage property

  constructor(private authService: AuthService) {} // Inject AuthService

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        // Handle successful login
        localStorage.setItem('authToken', response.token);
        this.loginMessage = 'Login successful!'; // Set success message
      },
      error: (error: any) => {
        // Handle login error
        console.error('Login failed', error);
        if (error.status === 0) {
          console.error('Connection refused. Please ensure the backend server is running.');
        }
        this.loginMessage = 'Login failed. Please try again.'; // Set error message
      }
    });
  }
}
