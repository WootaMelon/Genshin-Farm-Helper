import { Component, OnInit } from '@angular/core';
import { Tips } from 'src/app/services/api/get-tips.service';
import { GetTipsService } from 'src/app/services/api/get-tips.service';
@Component({
  selector: 'app-tips-section',
  templateUrl: './tips-section.component.html',
  styleUrls: ['./tips-section.component.scss'],
})
export class TipsSectionComponent implements OnInit {


  tips: Tips[];
  constructor(private service: GetTipsService) { }

  tiptext;

  ngOnInit() {

    this.service.getTips().subscribe(response => {
      this.tips = response;
      this.tiptext = this.tips[Math.floor(Math.random() * (3 + 1))].tip_text;
      console.log(this.tiptext);
    });
  }

}
