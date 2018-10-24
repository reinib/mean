import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product_id:string;
  product:any;
  constructor(private _router:Router, private _activatedRoute:ActivatedRoute, private _httpService:HttpService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params:Params)=>{
      let obs = this._httpService.getProduct(params['product_id'])
      obs.subscribe(data=>{
        console.log("******* my data!!!", data);
        this.product = data;
      })
    })
  }
  deleteProduct(product_id){
    let obs = this._httpService.deleteProduct(product_id)
    obs.subscribe(data=>{
      this._router.navigate(['/'])
    })
  }

}
