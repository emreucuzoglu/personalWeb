import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';

import {mockMainData} from './mockdata';


@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let data = mockMainData;
    return Observable.of(null).mergeMap(() => {
      if (request.url.endsWith('api/data') && request.method === 'GET') {
        return Observable.of(new HttpResponse({status: 200, body: data}));
      }

      return next.handle(request);

    })
      .materialize()
      .delay(500)
      .dematerialize();
  }
}

export let mockBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: MockBackendInterceptor,
  multi: true
};
