import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  loginStatus:any=localStorage.getItem("loginStatus");
  constructor(private postService:PostapiService,private router:Router)
{
  if(this.loginStatus=="active")
    {
      this.router.navigate(['dashboard']);
    }

}
signin(email:any, password:any)
  {
    
    this.postService.signin(email,password).subscribe(

      response => {alert('login successful');
      localStorage.setItem("loginStatus","active");
      localStorage.setItem("email",email);
      localStorage.setItem("userId",response.userId);
      localStorage.setItem("userRole",response.userRole);
      localStorage.setItem("userName",response.userName);

      this.router.navigate(['dashboard'])
    },

    () => { alert('Wrong email Id or password!!');  }


    );
  }
}



