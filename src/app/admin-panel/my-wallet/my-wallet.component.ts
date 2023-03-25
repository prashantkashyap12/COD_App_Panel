import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
import { ProfileUserComponent } from '../profile-user/profile-user.component';
import { TestDataService } from '../service/test-data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.css'],
})
export class MyWalletComponent implements AfterViewInit {
  // username = 'Profile Name';
  walletAmount:any;
  uid: any;
  LiveTime:any = new Date()
  AddFund:any="123";
  addMoneyAlert:boolean = false;
  WidthMoneyAlert:boolean = false;
  private WalletReqURL = "https://ajay-bbdd1-default-rtdb.firebaseio.com/walletAddRequest.json"
  private WalletResURL = "https://ajay-bbdd1-default-rtdb.firebaseio.com/walletWithdRequest.json"
  @ViewChild('ProfileUserComponent') getName!:ProfileUserComponent;
  constructor(private db: AngularFireDatabase, private _wallet:TestDataService, private _http:HttpClient) {
    this.uid = localStorage.getItem('userId');
    firebase
      .database()
      .ref('users/' + this.uid)
      .once('value', (snap) => {
        this.walletAmount = snap.val().walletAmount;
        this.uwallet= this.walletAmount;
        localStorage.setItem("wallet",this.uwallet)
      });
  }

  ngAfterViewInit(){
  }

  tes:any;
  ucont:any;
  uwallet:any;
  reqWallet:any;
  password:any;
  OldAccount:any
  OldIFSC:any;
  refferCode:any;
  uemail:any
  account_Accunt:any;
  account_IFSC:any;
  account_WithReq:any;
    

  ngOnInit() {
    this.uid = localStorage.getItem('userId');
    this.tes = localStorage.getItem("uname");
    this.ucont = localStorage.getItem("ucontact"); 
    this.uwallet = localStorage.getItem("wallet");
    this.password = localStorage.getItem("Password");
    this.OldAccount = localStorage.getItem("AccountNum");
    this.OldIFSC = localStorage.getItem("IFSC_code");
    this.refferCode = localStorage.getItem("RefferCode");
    this.uemail = localStorage.getItem("email");
  }


  addmoney(){  }

  // POST data to Admin panel
  addmoneyAdd() {
    this._http.post(this.WalletReqURL,{
      Time:this.LiveTime,
      Name: this.tes,
      Contact:this.ucont,
      LiveWallet:this.uwallet,
      ReqAdd:this.reqWallet,
      Uid:this.uid,
      Password:this.password,
      OldAccount:this.OldAccount,
      OldIFSC:this.OldIFSC,
      REfferCode:this.refferCode,
      uemail:this.uemail
    }).subscribe(res=>{
      console.log(res);
      this.addMoneyAlert = true;
      alert("आपकी Request स्वीकार कर ली गई है।    धन्यवाद |||")
    })
  }

  // Wallet Withdrawal Amount Request
  WithmoneyAc(){
    this._http.post(this.WalletResURL,{
      LiveTime:this.LiveTime,
      Name:this.tes,
      Contact:this.ucont,
      LiveWallet:this.uwallet,
      Password:this.password,
      OldAccount:this.OldAccount,
      OldIFSC:this.OldIFSC,
      REfferCode:this.refferCode,
      uemail:this.uemail,
      Account_No:this.account_Accunt,
      Account_IFSC:this.account_IFSC,
      Account_WithReq:this.account_WithReq,
      Uid:this.uid 
    }).subscribe(res=>{
      console.log(res);
      this.WidthMoneyAlert = true;
      alert("आपकी Request स्वीकार कर ली गई है।    धन्यवाद |||")
    })

  }
  // Page Refersh Button
  refresh(){
    window.location.reload();
  }
 
}
