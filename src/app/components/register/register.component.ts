import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import {Router, Route} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
     private flashMessages: FlashMessagesService,
     private authService: AuthService,
     private router: Router
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    if (!this.validateService.validateRegister(user)) {
      this.flashMessages.show('Please fill all fields', { cssClass: 'alert-danger' , timeout: 3000 } );
      return false;
    }
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessages.show('Please use valid email.', { cssClass: 'alert-danger' , timeout: 3000 } );
      return false;
    }

    //register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessages.show('You are now register and can login.', { cssClass: 'alert-success' , timeout: 3000 } );
        this.router.navigate(['/login']);

      }else{
        this.flashMessages.show('Something went wrong.', { cssClass: 'alert-danger' , timeout: 3000 } );
        this.router.navigate(['/register']);
      }
    })

  }

}
