import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CRUD_RESOURCE_URL } from 'src/app/core/crud/crud-resource-url';
import { CRUDService } from 'src/app/core/crud/crud.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  providers: [
    CRUDService,
    {
      provide: CRUD_RESOURCE_URL,
      useValue: 'product',
    },
  ],
  template: `<p>product-list works!</p>`,
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  /**
   *
   */
  constructor(crud: CRUDService) {
    crud.read().subscribe((data) => {
      console.log(data);
    });
  }
}
