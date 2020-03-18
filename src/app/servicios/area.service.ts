import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { areas } from '../modelos/areas'; // IMPORTAR

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private httpClient: HttpClient) { }

  getArea(): Observable<areas> {
    return this.httpClient.get<areas>('http://www.mocky.io/v2/5e712c933000006a007a34c4');
  }
}
