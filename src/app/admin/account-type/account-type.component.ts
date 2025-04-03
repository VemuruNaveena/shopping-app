import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from '../../category.service';
import { AccessoriesComponent } from '../../men/accessories/accessories.component';
import { AccountApiI } from './account-interfaces';

@Component({
  selector: 'app-account-type',
  standalone: false,
  templateUrl: './account-type.component.html',
  styleUrl: './account-type.component.scss',
})
export class AccountTypeComponent {
  categoryService = inject(CategoryService);
  accountForm = new FormGroup({
    id: new FormControl(''),
    type: new FormControl(''),
  });

  create(): void {
    this.categoryService.fetchAccount(this.accountForm.value).subscribe(
      (response: AccountApiI) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
