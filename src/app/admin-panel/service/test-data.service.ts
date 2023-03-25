import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  private WalletAdd = "https://ajay-bbdd1-default-rtdb.firebaseio.com/walletAdd.json"
  constructor(private _http:HttpClient) { }

  walletReq(data:any){
    return this._http.post(this.WalletAdd,data);
  }

  testText1:any = "Jay Shree Ram"

  testText = new Subject<any>();
  

}
