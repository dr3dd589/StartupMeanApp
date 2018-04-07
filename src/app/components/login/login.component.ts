import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessages: FlashMessagesService,
    private router: Router,
    private authService: AuthService
  ) { }


  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
          if(data.success){
            this.authService.storeUserData(data.token, data.user);
            this.flashMessages.show('You are now logged in.',{ cssClass:'alert-success', timeout: 4000})
            this.router.navigate(['/dashboard'])
          }else{
            this.flashMessages.show(data.msg, {
              cssClass: 'alert-danger',
              timeout: 2000
            });
            this.router.navigate(['/login'])
          }
    });
  }


}
