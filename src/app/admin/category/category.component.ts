import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from '../../category.service';
import { categoryApiI } from './category-interfaces';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  categoryService = inject(CategoryService);
  categoryForm = new FormGroup({
    type: new FormControl(''),
    code: new FormControl(''),
  });

  showSucessMessage = false;

  create(): void {
    this.showSucessMessage = false;
    this.categoryService.fetchCategory(this.categoryForm.value).subscribe(
      (response: categoryApiI) => {
        console.log(response);
        this.categoryForm.reset();
        this.showSucessMessage = true;
      },
      (error: any) => {}
    );
  }
}
