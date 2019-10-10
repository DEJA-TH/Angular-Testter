import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Product } from '../model/Iproduct';
import { ProductService } from './product.service';
import { ProductFetch } from '../productfetch';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'api/products';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private httpClient: HttpClient) { }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl).pipe(tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getProducts(id: number): Observable<ProductFetch> {
    const url = '${this.apiUrl}/${id}';
    return this.httpClient.get<ProductFetch>(url).pipe(
      catchError(this.handleError)
    );
  }

  addProduct(product: ProductFetch): Observable<ProductFetch> {
    product.id = null;
    return this.httpClient.post<Product>(this.apiUrl, product, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  // แก้ยังไม่ได้
  // deleteProduct(id: number): Observable<Product> {
  //   const url = '${this.apiUrl}/${id}';
  //   return this.httpClient.delete<Product>(url , this.httpOptions).pipe(
  //     catchError(this.handleError)
  //   );
  // }
  deleteProduct(name: string): Observable<ProductService> {
    const url = this.apiUrl;
    return this.httpClient.delete<ProductService>(url, this.httpOptions).pipe(
      tap(_ => console.log('delete Product name=${name}')),
      catchError(this.handleError)
    );
  }

  updateProduct(product: ProductFetch): Observable<ProductFetch> {
  const url = '${this.apiUrl}/${product.id}';
  return this.httpClient.put<ProductFetch>(this.apiUrl, product , this.httpOptions).pipe(
    map(() => product),
    catchError(this.handleError)
  );
  }
}
