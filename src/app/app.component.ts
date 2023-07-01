import { Component } from '@angular/core';
import { User } from './user';
import { RegistrationService } from './registration.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular','python','Devops'];
  topicHasError=true;
  userModel= new User('rob','rob@gmail.com',78267434,'default','morning',true);

  constructor(private  _registrationService:RegistrationService){}

  validateTopic(value :any) {
    if(value == 'default'){
      this.topicHasError=true;
    }
    else{
      this.topicHasError=false;
    }

  }
  onSubmit(){
    this._registrationService.enroll(this.userModel)
    .subscribe(
      data=> console.log('Success', data),
      error=>console.error('Error',error)

    )
  }
}
