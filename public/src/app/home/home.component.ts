import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product_id:string;
  allProducts:any;
  num:any;
  constructor(private _activatedRoute:ActivatedRoute, private _httpService:HttpService, private _router:Router) { }

  ngOnInit() {
    let obs = this._httpService.getAllProducts();
    obs.subscribe(data=>{
      console.log(data);
      this.allProducts = data;
    })
  }
  index(){
    allProducts.idnexOf(product);
  }

}
