import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
})
export class MainpagePage implements OnInit {

  username: string;

  constructor(private router: Router, private storage: Storage) {
  }



  ngOnInit() {
    this.storage.get('name').then((val) => {
      this.username = val;
    });
  }

}
