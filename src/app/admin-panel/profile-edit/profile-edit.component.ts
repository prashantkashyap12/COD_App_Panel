import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MyWalletComponent } from '../my-wallet/my-wallet.component';
import { TestDataService } from '../service/test-data.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit, AfterViewInit{
  userId: any;
  password: any;
  newPassword: any;
  firstName: any = ' ';
  surName: any = ' ';
  emailId: any = '';
  address: any = '';
  // walletAmount: any ;
  paymentInfo: any = '';
  phoneNumber: any = '';
  post: any = '';

  //conform acou
  testconform:any;
  //ViewChild Componet
  a:any


  @ViewChild('closebutton') closebutton: any;

  constructor(
    private db: AngularFireDatabase,
    private af: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private _liveWal:TestDataService
    ){
    this.userId = localStorage.getItem('userId');
    console.log('Constructor Calling');
    }

  // On Inislization lifeCycle hooks. 
  ngOnInit() {
    this.getUser();
    console.log('ngOnInIt Calling yes');
  }

  ngAfterViewInit(){
    console.log('After View Init working');
    this.testconform = 999;
  }


  getUser() {
    firebase
      .database()
      .ref('users/' + this.userId)
      .once(
        'value',
        (snap) => {
          let data = snap.val();
          this.emailId = data.email;
          this.firstName = data.firstName;
          this.surName = data.surName;
          this.phoneNumber = data.phoneNumber;
          this.address = data.address;
          this.password = data.password;
          this.paymentInfo = data.paymentInfo;
          this.post = data.post;
        },
        (error) => {
          if (error) {
            this.toastr.error('Email id not found, Please try to signin again');
            localStorage.clear();
            this.router.navigate(['/login']);
          }
        }
      );
  }


   

  // conform account
  dataConformAcc(){
     this.surName ;
  }

  

  dataupdate() {
    // use view child /  input decorator / @ SUBJECT     8979409026
    firebase
      .database()
      .ref('users/' + this.userId)
      .update(
        {
          uid: this.userId,
          firstName: this.firstName,
          surName: this.surName,
          email: this.emailId,
          address: this.address,
          phoneNumber: this.phoneNumber,
          paymentInfo: this.paymentInfo,
          post: this.post,
          // walletAmount: this.walletAmount,
        },
        (error) => {
          if (error) {
            this.toastr.error('Error in profile update');
          } else {
            this.toastr.success('Profile Updated Successfully');
            this.router.navigate(['/user-profile']);
          }
        }
      );
  }

  changePassword() {
    const cpUser = firebase.auth().currentUser;
    cpUser!
      .updatePassword(this.newPassword)
      .then((res) => {
        this.saveNewPassword();
        this.toastr.success('Password changed Successfully');
        this.getUser();
        // this.closebutton.nativeElement.click();
      })
      .catch(function (error) {
        console.log(error, 'ERRR');
      });
  }

  saveNewPassword() {
    firebase
      .database()
      .ref('users/' + this.userId)
      .update({
        password: this.newPassword,
      });
  }
}
