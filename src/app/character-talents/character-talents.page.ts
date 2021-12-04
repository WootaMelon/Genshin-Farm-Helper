import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-talents',
  templateUrl: './character-talents.page.html',
  styleUrls: ['./character-talents.page.scss'],
})

export class CharacterTalentsPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  days: string
  characters = [{ name: 'Albedo' }, { name: 'Aloy' }];

  mondaythursdayrift = [{ name: 'Klee' }, { name: 'Aloy' }, { name: 'Tartaglia' }, { name: 'Amber' }, { name: 'Barbara' }, { name: 'Diona' }, { name: 'Sucrose' }];
  tuesdayfridayrift = [{ name: 'Diluc' }, { name: 'Eula' }, { name: 'Jean' }, { name: 'Mona' }, { name: 'Benett' }, { name: 'Noelle' }, { name: 'Razor' }];
  wednesdaysaturdayrift = [{ name: 'Albedo' }, { name: 'Venti' }, { name: 'Fischl' }, { name: 'Kaeya' }, { name: 'Lisa' }, { name: 'Rosaria' }];
  allrift = [{ name: 'Klee' }, { name: 'Aloy' }, { name: 'Tartaglia' }, { name: 'Amber' }, { name: 'Barbara' }, { name: 'Diona' }, { name: 'Sucrose' }, { name: 'Diluc' }, { name: 'Eula' }, { name: 'Jean' }, { name: 'Mona' }, { name: 'Benett' }, { name: 'Noelle' }, { name: 'Razor' }, { name: 'Albedo' }, { name: 'Venti' }, { name: 'Fischl' }, { name: 'Kaeya' }, { name: 'Lisa' }, { name: 'Rosaria' }];

  mondaythursdaymansion = [{ name: 'Keqing' }, { name: 'Qiqi' }, { name: 'Xiao' }, { name: 'Ninguang' }];
  tuesdayfridaymansion = [{ name: 'Ganyu' }, { name: 'Hutao' }, { name: 'Kazuha' }, { name: 'Chongyun' }, { name: 'Xianling' }];
  wednesdaysaturdaymansion = [{ name: 'Zhongli' }, { name: 'Beidou' }, { name: 'Xingqiu' }, { name: 'Xinyan' }, { name: 'Yanfei' }];
  allmansion = [{ name: 'Keqing' }, { name: 'Qiqi' }, { name: 'Xiao' }, { name: 'Ninguang' }, { name: 'Ganyu' }, { name: 'Hutao' }, { name: 'Kazuha' }, { name: 'Chongyun' }, { name: 'Xianling' }, { name: 'Zhongli' }, { name: 'Beidou' }, { name: 'Xingqiu' }, { name: 'Xinyan' }, { name: 'Yanfei' }];

  mondaythursdayviolet = [{ name: 'Kokomi' }, { name: 'Yoimiya' }, { name: 'Thoma' }];
  tuesdayfridayviolet = [{ name: 'Ayaka' }, { name: 'Sara' }];
  wednesdaysaturdayviolet = [{ name: 'RaidenShogun' }, { name: 'Sayu' }];
  allviolet = [{ name: 'Kokomi' }, { name: 'Yoimiya' }, { name: 'Thoma' }, { name: 'Ayaka' }, { name: 'Sara' }, { name: 'RaidenShogun' }, { name: 'Sayu' }];

  constructor() {
    let currentDate = new Date();
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    this.days = weekdays[currentDate.getDay()];

  }

  ngOnInit() {

  }

}
