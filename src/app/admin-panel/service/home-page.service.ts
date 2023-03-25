import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  private liveRes = "https://ajay-bbdd1-default-rtdb.firebaseio.com/Live_result.json"
  private MyGame = "https://ajay-bbdd1-default-rtdb.firebaseio.com/MyGame.json"

  constructor(private _getRes:HttpClient) { }

  //Get API
  liveResView(){
   return this._getRes.get(this.liveRes);
  }


  // PUB G
  ResultPlay(data:any []){
    return this._getRes.post(this.MyGame,data)
  }

}
