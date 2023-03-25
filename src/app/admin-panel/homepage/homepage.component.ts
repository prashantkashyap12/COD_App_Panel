import { Component } from '@angular/core';
import { HomePageService } from '../service/home-page.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  walletVal:any;
  username:any
  liveTime:any = new Date()

  liveResult:any = [

    // {name:"Market 1", Result:13, time:'16:00:PM'},
    // {name:"Market 2", Result:26, time:'04:00:PM'},
    // {name:"Market 3", Result:39, time:'12:00:PM'},
    // {name:"Market 4", Result:52, time:'01:00:PM'},
    // {name:"Market 5", Result:63, time:'09:00:PM'},
    // {name:"Market 6", Result:23, time:'13:00:PM'},
    // {name:"Market 7", Result:53, time:'03:00:PM'},
    // {name:"Market 8", Result:66, time:'02:00:PM'},
    // {Add_market1:"Market 9", Add_value1:97, Add_time1:'07:00:PM'},

  ];


  constructor(private _LiveRes:HomePageService){ 
  }

  ngOnInit(){
    this._LiveRes.liveResView().subscribe(res=>{
      const Resdata = JSON.stringify(res);
      console.log(Resdata);                    // here we are removing indexing.
      this.liveResult = JSON.parse(Resdata);   // here we are parsial divied and transfering to array.
    })
    this.walletVal=localStorage.getItem("wallet");
    console.log(this.walletVal)
    this.username = localStorage.getItem("uname");
    console.log(this.walletVal)
  }
  refresh(){
    window.location.reload();
  }

  



  


}
