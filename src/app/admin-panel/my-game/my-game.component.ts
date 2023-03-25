import { Component } from '@angular/core';
import data from '../../services/game.json';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-my-game',
  templateUrl: './my-game.component.html',
  styleUrls: ['./my-game.component.css'],
})
export class MyGameComponent {
  jsonData: any;
  
  uid: string | null;
  walletAmount: number = 0;
  addedmoney: number = 0;
  updatedWallet: number = 0;
  gameAlert=false;
  AfterPlayWalletUpdate:any;
  private LiveGammer = 'https://ajay-bbdd1-default-rtdb.firebaseio.com/LiveGammer/';
  BaharHaroof = [
    {
      number: 1,
      amount: '',
    },
    {
      number: 2,
      amount: '',
    },
    {
      number: 3,
      amount: '',
    },
    {
      number: 4,
      amount: '',
    },
    {
      number: 5,
      amount: '',
    },
    {
      number: 6,
      amount: '',
    },
    {
      number: 7,
      amount: '',
    },
    {
      number: 8,
      amount: '',
    },
    {
      number: 9,
      amount: '',
    },
    {
      number: 10,
      amount: '',
    },
  ];

  underHaroof = [
    {
      number: 1,
      amount: '',
    },
    {
      number: 2,
      amount: '',
    },
    {
      number: 3,
      amount: '',
    },
    {
      number: 4,
      amount: '',
    },
    {
      number: 5,
      amount: '',
    },
    {
      number: 6,
      amount: '',
    },
    {
      number: 7,
      amount: '',
    },
    {
      number: 8,
      amount: '',
    },
    {
      number: 9,
      amount: '',
    },
    {
      number: 10,
      amount: '',
    },
  ];
  selectedMarket: any;
  dbData: any = [];

  constructor(
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private service: GameService,
    private router: Router,
    private _http:HttpClient
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.selectedMarket = params['market'];
      console.log(this.selectedMarket, 'SELECTEDMARKET');
      // this.dbData.market = this.selectedMarket;
    });
    this.uid = localStorage.getItem('userId');
    firebase
      .database()
      .ref('users/' + this.uid)
      .once('value', (snap) => {
        this.walletAmount = snap.val().walletAmount;
      });
  }

  LiveTimmer:any = new Date();
  LG_name:any;
  LG_Contact:any;
  Temp_Bat:any;
  // LG_Uid:any; REPLACE  this.uid
  
  ngOnInit() {
    this.jsonData = data;
    this.service.getData().subscribe((res) => {
      console.log(res, 'SUCESS YAAAY');
    });

    this.LG_name = localStorage.getItem("uname"),
    this.LG_Contact = localStorage.getItem("ucontact")
    // console.log(this.LiveTimmer,this.LG_name,this.LG_Contact,this.uid);
    // console.log("POST Data = "+this.dbData);
  }

  valuechange(type: string, num: any, e: any, index: number) {
    if (type == 'standard') {
      if (this.walletAmount == 0) {
        this.toastr.error('Please Add money to your wallet to play game!');
        this.jsonData[index].amount = '';
      }
      let amount = e.target.value * 1;
      console.log(
        amount,
        'amount',
        this.walletAmount,
        'Wallet amount',
        'EEEEEEEE'
      );
      if (amount > this.walletAmount) {
        this.toastr.error('Please Add money to your wallet to play game!');
        this.jsonData[index].amount = '';
      } else {
        this.walletAmount = this.walletAmount - amount;
        this.addedmoney += amount;
        this.dbData.push({ num, amount });
        console.log(this.addedmoney, 'Added money');
        console.log(this.walletAmount, 'UPDATED VVAllet');
      }
    } else if (type == 'bahar') {
      if (this.walletAmount == 0) {
        this.toastr.error('Please Add money to your wallet to play game!');
        this.BaharHaroof[index].amount = '';
      }
      let amount = e.target.value * 1;
      console.log(
        amount,
        'amount',
        this.walletAmount,
        'Wallet amount',
        'EEEEEEEE'
      );
      if (amount > this.walletAmount) {
        this.toastr.error('Please Add money to your wallet to play game!');
        this.BaharHaroof[index].amount = '';
      } else {
        this.walletAmount = this.walletAmount - amount;
        this.addedmoney += amount;
        this.dbData.push({ num, amount, type: 'Bahar Haroof' });
        console.log(this.addedmoney, 'Added money');
        console.log(this.walletAmount, 'UPDATED VVAllet');
      }
    } else if (type == 'under') {
      if (this.walletAmount == 0) {
        this.toastr.error('Please Add money to your wallet to play game!');
        this.underHaroof[index].amount = '';
      }
      let amount = e.target.value * 1;
      console.log(
        amount,
        'amount',
        this.walletAmount,
        'Wallet amount',
        'EEEEEEEE'
      );
      if (amount > this.walletAmount) {
        this.toastr.error('Please Add money to your wallet to play game!');
        this.underHaroof[index].amount = '';
      } else {
        this.walletAmount = this.walletAmount - amount;
        this.addedmoney += amount;
        this.dbData.push({ num, amount, type: 'Under Haroof' });
        console.log(this.addedmoney, 'Added money');
        console.log(this.walletAmount, 'UPDATED VVAllet');
      }
    }
    console.log(this.dbData, 'FOREDASE Data Send');
    this.Temp_Bat = this.dbData
    this.AfterPlayWalletUpdate = this.walletAmount;    // we are play remaing ammount.
  }


  tempDB:any;
  _tempData:any = [];
  PostURL:any;
  playGame() {    
    this.gameAlert=true;
    console.log(this.LiveTimmer,this.LG_name,this.LG_Contact,this.uid);
    this._tempData.push(this.Temp_Bat);
    // PUSH API CALLING
      this.PostURL = this.LiveGammer+this.uid+".json";
      console.log(this.PostURL)
      this._http.post(this.PostURL,{
      liveTime:this.LiveTimmer,
      UID:this.uid,
      Name:this.LG_name,
      Contact:this.LG_Contact,
      Game_Bat:this._tempData,
      marketValue:this.selectedMarket
      }).subscribe(res=>{
        console.log(res)
      })
    this.dataPOSTAPI();
    this.AfterPlayWallet();
  }

  dataPOSTAPI(){
  }
  
  // After Play Wallet
  AfterPlayWallet() {
    firebase
      .database()
      .ref('users/' + this.uid)
      .update({
        walletAmount: this.AfterPlayWalletUpdate,
      });
  }
}
