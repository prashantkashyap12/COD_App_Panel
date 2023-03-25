import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
import { TestDataService } from '../service/test-data.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css'],
})
export class ProfileUserComponent {
  userId: any;
  emailId: any;
  password: any;
  name: any;
  phoneNumber: any;
  address: any;
  paymentInfo: any;
  post: any;

  constructor(private db: AngularFireDatabase, private _WalletForm:TestDataService) {
    this.userId = localStorage.getItem('userId');
    firebase
      .database()
      .ref('users/' + this.userId)
      .once('value', (snap) => {
        let data = snap.val();
        console.log(data, 'snapValue');
        this.emailId = data.email;
        localStorage.setItem("email", this.emailId);
        //RND More * 5
        this.name = data.firstName + ' ' + data.post;
        localStorage.setItem("uname",this.name);    //NEERAJ SIR
        this.phoneNumber = data.phoneNumber; 
        localStorage.setItem("ucontact",this.phoneNumber);   // Prashant 
        this.password = data.password;
        localStorage.setItem("Password",this.password);
        this.address = data.address;
        localStorage.setItem("AccountNum",this.address);
        this.paymentInfo = data.paymentInfo;
        localStorage.setItem("IFSC_code",this.paymentInfo);
        this.post = data.surName;     // REffer Code
        localStorage.setItem("RefferCode", this.post);

      });  
  }

  ngOninit() {
      this._WalletForm.testText.next("this.name");

    }

  
}
