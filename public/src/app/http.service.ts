import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }
  getAllProducts(){
    return this._http.get('/api/products')
  }
  createProduct(product){
    console.log("In the service")
    return this._http.post('/api/products', product)
  }
  getProduct(product_id){
    return this._http.get('/api/products/' + product_id)
  }
  updateProduct(product){
    return this._http.put('/api/products/' + product._id, product)
  }
  deleteProduct(product_id){
    return this._http.delete('/api/products/' + product_id)
  }
}
