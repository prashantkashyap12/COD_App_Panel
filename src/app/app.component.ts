import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'admin-panel';
  showHeader = false;

  constructor(private _http:HttpClient) {
    if (localStorage.getItem('userId')) {
      this.showHeader = true;
      
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
    }
    console.log(firebase.apps.length, 'length');
  }

  ngOninit() {


  }

  ngDoCheck() {
    if (localStorage.getItem('userId')) {
      this.showHeader = true;
    }
  }


  value1:any = "data 1";
  value2:any = "data 2";
  value3:any = "data 3";
  value4:any = "data 4";

  liveCounter:any=1;


  private posturl = 'https://ajay-bbdd1-default-rtdb.firebaseio.com/liveDownloader/downloader.json'
  
  ngOnInit(){
    this._http.get(this.posturl)
    .subscribe(res=>{
      console.log(res);
      this.liveCounter =  res;
    })
   
  }

  postData(){
 
  }





}
