import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GithubService } from '../github.service';
import { Repos } from '../repos';


@Component({
  selector: 'app-userspages',
  templateUrl: './userspages.component.html',
  styleUrls: ['./userspages.component.css']
})
export class UserspagesComponent implements OnInit {
  user:User 
  repositories:Repos[]
  constructor(private githubUser : GithubService) {
  }
  findUser(searchUser){
    this.githubUser.getUser(searchUser).subscribe(data => {
      this.user = data
  })
  this.githubUser.getRepos(searchUser).subscribe(data => {
    this.repositories = data
  })
  
  }

  ngOnInit(): void {
    this.findUser("Kvria")
  }

}
