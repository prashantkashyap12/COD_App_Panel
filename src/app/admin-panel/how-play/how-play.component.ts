import { Component } from '@angular/core';

@Component({
  selector: 'app-how-play',
  templateUrl: './how-play.component.html',
  styleUrls: ['./how-play.component.css']
})
export class HowPlayComponent {

  constructor(){
    console.log('constructor is working') 
    // this._walletVal.mywallet.subscribe(res=>{
    //   console.log('constructor is working in HOW TO PLAY'+res);
    // })
  }

  ngOnInit(){
    console.log('ngOnInit is working')

  }

}
