import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';  // Correct the path
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-create-account',
  standalone: true,  // Indicating that this is a standalone component
  imports: [FormsModule, CommonModule, RouterModule],  // Import FormsModule, CommonModule, and RouterModule
  templateUrl: './create-account.component.html'
})
export class CreateAccountComponent {
  email = '';
  name = '';
  phone = '';
  password = '';
  errorMessage: string = ''; // Add errorMessage property

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.email || !this.name || !this.phone || !this.password) {
      this.errorMessage = 'Please fill in all fields'; // Set error message
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      this.errorMessage = 'Please enter a valid email address'; // Set email format error message
      return;
    }

    this.authService.register(this.email, this.name, this.phone, this.password)
      .subscribe({
        next: (response: any) => {
          console.log('Registration successful', response);
          // Redirect to login or dashboard after successful registration
          this.router.navigate(['/login']);
        },
        error: (error: any) => {
          console.error('Registration failed', error);
          if (error.status === 400) {
            this.errorMessage = error.error.message; // Set validation error message
          } else {
            this.errorMessage = 'Registration failed. Please try again.'; // Set general error message
          }
        }
      });
  }
}
