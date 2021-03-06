import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:  `      
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Test</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li><a routerLink="/detail" routerLinkActive="active">Detail</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <!--<li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>-->
            <li><a class="glyphicon glyphicon-log-out" href="#" onclick="signOut();">Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'Angular'; }
