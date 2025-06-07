import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from '../../models/user';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-home-page',
  imports: [ RouterModule,MatCardModule,MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
allUsers$:Observable<Users[]>;
  constructor(private userService:UsersService){
    this.allUsers$=this.userService.allUsers$;
    this.userService.getAllUsers();
  }
  ngOnInit(): void { 
  }
  
}
