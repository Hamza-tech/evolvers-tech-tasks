import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

   constructor(private http: HttpClient) {}

    public getJSON(): Observable<any> {
        return this.http.get("./../assets/form.json");
    }

    fetchCSV(): Observable<ArrayBuffer> {
      let headers = new HttpHeaders();

      const options: {
          headers?: HttpHeaders;
          observe?: 'body';
          params?: HttpParams;
          reportProgress?: boolean;
          responseType: 'arraybuffer';
          withCredentials?: boolean;
      } = {
          responseType: 'arraybuffer'
      };

      return this.http
          .get('http://localhost:4200/assets/list.csv', options)
          .pipe(
              map((file: ArrayBuffer) => {
                  return file;
              })
          );
  }
}
