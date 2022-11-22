import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private fireauth : AngularFireAuth, private router: Router) { }
  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem('token','true');

        if(res.user?.emailVerified == true) {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['/email-verification']);
        }

    }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
    })
  }

signup(email : string, password : string) {
  this.fireauth.createUserWithEmailAndPassword(email,password).then( res => {
   alert('Signup is Successful');
   this.sendEmailForVerification (res.user);    
    this.router.navigate(['/login']);
  }, err => {
    alert(err.message);
    this.router.navigate(['/signup']);

  })


}

  logout(){
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    }, err => {
      alert(err.message)
    })

  }

  forgotPassword(email : string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/email-verification']);
    }, err => {
      alert(err.message);
    })
}

  sendEmailForVerification(user : any) {
    console.log(user);
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/email-verification']);
    }, (err : any) => {
      alert(err.message)
    })
  }
}
