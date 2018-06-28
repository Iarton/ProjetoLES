import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { produto  } from './produtos';
import { HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataService {

  
  constructor(private http: HttpClient) { 
  }
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getProdutos():Observable<produto[]> {
    return this.http.get<produto[]> ('http://localhost:8081/produtos');
  }

  postProduto(produto:produto):Observable<produto> {
    return this.http.post<produto>('http://localhost:8081/produtos', produto);
  }
}
