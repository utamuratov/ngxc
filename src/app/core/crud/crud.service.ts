import { Inject, Injectable } from '@angular/core';
import { ApiHttpService } from '../api-http/api-http.service';
import { CRUD_RESOURCE_URL } from './crud-resource-url';

@Injectable()
export class CRUDService {
  constructor(
    protected apiHttp: ApiHttpService,
    @Inject(CRUD_RESOURCE_URL) protected crudResourceUrl: string
  ) {}

  create(data: any) {
    return this.apiHttp.post(this.crudResourceUrl, data);
  }

  read() {
    return this.apiHttp.get(this.crudResourceUrl);
  }

  readById(id: number | string) {
    return this.apiHttp.get(`${this.crudResourceUrl}/${id}`);
  }

  update(id: number | string, data: any) {
    return this.apiHttp.put(`${this.crudResourceUrl}/${id}`, data);
  }

  delete<T>(id: number | string) {
    return this.apiHttp.delete<T>(`${this.crudResourceUrl}/${id}`);
  }
}
