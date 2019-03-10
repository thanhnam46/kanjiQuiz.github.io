import { Component, OnInit } from '@angular/core';
import { Hiragana } from '../level-management/hiragana';
import { HIRAGANAS } from '../level-management/mock-hiraganas';

@Component({
  selector: 'app-level-management',
  templateUrl: './level-management.component.html',
  styleUrls: ['./level-management.component.css']
})
export class LevelManagementComponent implements OnInit {

  hiragana: Hiragana ={
    id: 1,
    romanji: 'a',
    hiragana: 'あ'
  }
 
  hiraganas = HIRAGANAS;
  constructor() { }

  ngOnInit() {
  }

}
