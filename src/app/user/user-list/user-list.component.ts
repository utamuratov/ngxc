import { CommonModule } from '@angular/common';
import { HttpHandler } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { API_HTTP_BASE_URL } from 'src/app/core/api-http/api-http-base-url';
import { ApiHttpService } from 'src/app/core/api-http/api-http.service';
import { CRUD_RESOURCE_URL } from 'src/app/core/crud/crud-resource-url';
import { CRUDService } from 'src/app/core/crud/crud.service';
import { UserRequest, UserResponse } from '../models/user.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  providers: [
    // *IF YOU WANT TO OVERRIDE THE API BASE URL
    // {
    //   provide: API_HTTP_BASE_URL,
    //   useValue: 'https://aztester.uz',
    // },
    // ApiHttpService,

    {
      provide: CRUD_RESOURCE_URL,
      useValue: 'user',
    },
    CRUDService,
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  data$: Observable<UserResponse[]> = of([]);

  constructor(private crud: CRUDService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.read();
  }

  read() {
    this.data$ = this.crud.read();
  }

  update(id: number | string, data: any) {
    alert(`Update ${id} ${JSON.stringify(data)}`);
  }

  delete(id: number | string) {
    this.crud.delete<UserRequest>(30).subscribe((data) => {
      this.read();
      alert(`Deleted: ${id} ${JSON.stringify(data)}`);
      this.cd.markForCheck();
    });
  }
}
