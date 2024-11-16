import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';  // Correct the path
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel

@Component({
  selector: 'app-create-account',
  standalone: true,  // Indicating that this is a standalone component
  imports: [FormsModule],  // Import FormsModule
  templateUrl: './create-account.component.html'
})
export class CreateAccountComponent {
  email = '';
  name = '';
  phone = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.email && this.name && this.phone && this.password) {
      this.authService.register(this.email, this.name, this.phone, this.password)
        .subscribe(
          (response: any) => {
            console.log('Registration successful', response);
            // Redirect to login or dashboard after successful registration
            this.router.navigate(['/login']);
          },
          (error: any) => {
            console.error('Registration failed', error);
            // Show an error message to the user
          }
        );
    } else {
      alert('Please fill in all fields');
    }
  }
}
