import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.css']
})
export class GameDashboardComponent {
  private dateview = new Date();
  dataview:any = [
  ]
  dataChart:any = [
    {
      marketType:"Normal Game",
      marketNum:"12",
      marketAmount:"10",
    }
  ]
// Live Gammer Programming
private tempURL="https://ajay-bbdd1-default-rtdb.firebaseio.com/LiveGammer/";
userId:any;
mainURL="";
constructor(private _http:HttpClient){
}
  ngOnInit(){
    this.userId = localStorage.getItem('userId');
    this.mainURL=this.tempURL+this.userId+".json";
    this._http.get(this.mainURL).subscribe(res=>{
      const tempData = Object.values(res);
      this.dataview = tempData;
    })
  }

 tempArry:any = [
  {type:'Normal'}
 ];
 chartView:any = [];
 chart:any = [
  { amount: 11, num: 1, type: 'Bahar Haroof' }
 ];
  viewChart(data:any){
    // debugger
    this.tempArry = this.dataview[data].Game_Bat[0];
  }
}
