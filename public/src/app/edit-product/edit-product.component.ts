import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product_id:string;
  product:any;
  error:String="";
  constructor(private _router:Router, private _activatedRoute:ActivatedRoute, private _httpService:HttpService) { }

  ngOnInit() {
    this.resetProduct();
  }
  resetProduct(){
    this._activatedRoute.params.subscribe((params:Params)=>{
      let obs = this._httpService.getProduct(params['product_id'])
      obs.subscribe(data=>{
        console.log("******* my data!!!", data);
        this.product = data;
      })
    })
    this.error = ""
  }

  updateProduct(){
    let obs = this._httpService.updateProduct(this.product)
    obs.subscribe(data=>{
      console.log(data);
      if("errors" in data){
        this.error = data["message"];
      }
      else{
        this._router.navigate(['/'])
      }
    })
  }

}
