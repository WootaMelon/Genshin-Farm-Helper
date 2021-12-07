import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NgForm } from '@angular/forms';
import { UpdateresinService } from '../services/api/updateresin.service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
})
export class MainpagePage implements OnInit {

  username: string;

  constructor(private router: Router, private storage: Storage, private service: UpdateresinService) {
  }



  ngOnInit() {
    setTimeout(() => {
      this.storage.get('name').then((val) => {
        this.username = val;
      });
    }, 100);

  }
  onSubmit(form: NgForm) {
    const formvalue = form.value;
    if (formvalue.username != "" && formvalue.resincount != "") {
      console.log(formvalue);
      this.service.updateResin(formvalue).subscribe(response => {
        console.log(response);
        if (response == 'true') {
          this.storage.set('resin', formvalue.resincount);
          this.router.navigate(['farmselectorpage']);
          // this.storage.set('name', formvalue.username);
          // this.router.navigate(['mainpage']);
        }

      });
    }

  }

}
