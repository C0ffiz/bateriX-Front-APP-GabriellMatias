import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // <-- Both Modules

import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],  // <-- Both imported
})
export class AccountModule {}
