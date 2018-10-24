import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  error:String="";
  product:any;
  constructor(private _httpService:HttpService, private _router:Router) { }

  ngOnInit() {
    this.resetPage();
  }
  resetPage(){
  this.product = {
    title:"",
    qty:"",
    price:""
  }
  this.error = ""
}
createProduct(){
  let obs = this._httpService.createProduct(this.product)
  obs.subscribe(data=>{
    console.log(data);
    if("errors" in data){
      this.error = data["message"]
    }
    else{
      this.resetPage();
      this._router.navigate(['/'])
    }
  })
}

}
