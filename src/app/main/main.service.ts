import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MainData} from './Data';

@Injectable()
export class MainService {

  private apiUrl = 'api/data';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<MainData> {
    return this.http.get<MainData>(this.apiUrl)
      .retry(3);
  }

}
